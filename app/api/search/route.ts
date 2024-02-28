import { NextRequest, NextResponse } from 'next/server'
import { DefaultAuthor, ItemListing_Type, SearchResponse_Type } from '@/types/api'

// Revalidate timer in seconds (5 minutes)
const revalidate = 300

// Search items by name
export const GET = async (req: NextRequest) => {
	console.count('Search Fetch Request')

	// fetch items
	const title = req.nextUrl.searchParams.get('title')
	const res = await fetch(`${process.env.MELI_SEARCH_URL}?q=${title}`, {
		next: { revalidate },
	})

	const data = await res.json()
	if (!data) return NextResponse.json(data)

	// map to response object
	const categories = !data.filters.length
		? // if no filters, fake categories ???
		  ['Fake', 'Categories', title.substring(0, 1).toUpperCase() + title.substring(1)]
		: // find category filter
		  data.filters
				.find((f) => f.id === 'category')
				// sort by path_from_root length, and save longest
				.values.sort((a, b) => a.path_from_root.length - b.path_from_root.length)[0]
				// map longest path to string array
				.path_from_root.map((v) => v.name)

	const items: ItemListing_Type[] = data.results.map((item) => {
		const detail: ItemListing_Type = {
			id: item.id,
			title: item.title,
			price: {
				currency: item.currency_id,
				amount: Math.floor(item.price),
				decimals: Number(item.price.toString().split('.')[1]),
			},
			picture: item.thumbnail,
			condition: item.condition,
			free_shipping: item.shipping.free_shipping,

			// Extras
			seller_name: item.seller.nickname,
			// No location provided on API ???
			location: '',
		}
		return detail
	})

	const response: SearchResponse_Type = {
		author: DefaultAuthor,
		categories,
		items: items,
	}

	// return
	return NextResponse.json(response)
}
