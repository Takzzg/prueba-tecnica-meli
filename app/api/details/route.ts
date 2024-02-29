import { DefaultAuthor, ItemDetailsResponse_Type, ItemDetails_Type } from '@/types/api'
import { NextRequest, NextResponse } from 'next/server'

// Revalidate timer in seconds (5 minutes)
const revalidate = 300

const itemDetails = async (id: string) => {
	// console.count('Item Details Fetch Request')
	const res = await fetch(`${process.env.MELI_ITEM_URL}/${id}`, {
		next: { revalidate },
	})
	return res.json()
}
const itemDescription = async (id: string) => {
	// console.count('Item Description Fetch Request')
	const res = await fetch(`${process.env.MELI_ITEM_URL}/${id}/description`, {
		next: { revalidate },
	})
	return res.json()
}
const itemCategory = async (catID: string) => {
	// console.count('Item Category Fetch Request')
	const res = await fetch(`${process.env.MELI_CAT_URL}/${catID}`, {
		next: { revalidate },
	})
	return res.json()
}

export const POST = async (req: NextRequest) => {
	// read body
	const data = await req.json()
	const { itemID: id } = data

	// Can break on invalid id (eg: 1)
	// also React Dev Tools (or strict mode) are sending this as id ????
	// react_devtools_backend_compact.js.map

	// TODO: check id (maybe return error ?)

	const [details, description] = await Promise.all([itemDetails(id), itemDescription(id)])
	const rawCategories = await itemCategory(details.category_id)

	const categories = rawCategories.path_from_root.map((cat) => cat.name)

	const item: ItemDetails_Type = {
		id,
		title: details.title,
		price: {
			currency: details.currency_id,
			amount: Math.floor(details.price),
			decimals: Number(details.price.toString().split('.')[1]),
		},
		picture: details.thumbnail,
		condition: details.condition,
		free_shipping: details.shipping.free_shipping,
		sold_quantity: details.initial_quantity,
		description: description.plain_text,

		// extras
		location: [
			details.seller_address.city.name,
			details.seller_address.state.name,
			details.seller_address.country.name,
		].join(', '),
		permalink: details.permalink,
		// no seller nickname
		seller_name: details.seller_id,
	}

	const response: ItemDetailsResponse_Type = { author: DefaultAuthor, item, categories }

	// return
	return NextResponse.json(response)
}
