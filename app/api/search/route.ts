import { NextRequest, NextResponse } from 'next/server'
import { ItemListing_Type, SearchResponse_Type } from '@/types/api'

// Search items by name
export const GET = async (req: NextRequest) => {
	// fetch items
	const params = req.nextUrl.searchParams
	const res = await fetch(`${process.env.MELI_SEARCH_URL}?q=${params.get('title')}`)
	const data = await res.json()

	if (!data) return NextResponse.json(data)

	// map to response object
	const categories = data.filters
		// find category filter
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
		author: { name: 'Guido', lastname: 'Queiroz' },
		categories,
		items: items,
	}

	// return
	return NextResponse.json(response)
}
