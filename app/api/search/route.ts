import { NextRequest, NextResponse } from 'next/server'
import { ItemDetails_Type, SearchResponse_Type } from '../../../types/api/search'

// Search items by name
export const GET = async (req: NextRequest) => {
	// fetch items
	const params = req.nextUrl.searchParams
	const res = await fetch(`${process.env.MELI_SEARCH_URL}?q=${params.get('title')}`)
	const data = await res.json()

	if (!data) return NextResponse.json(data)

	// map to response object
	const categories = data.filters.find((cat) => cat.id === 'category')?.values.map((v) => v.name)

	const items: ItemDetails_Type[] = data.results.map((item) => {
		const detail: ItemDetails_Type = {
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
