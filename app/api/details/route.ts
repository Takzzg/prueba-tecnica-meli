import { DefaultAuthor, ItemDetailsResponse_Type, ItemDetails_Type } from '@/types/api'
import { NextRequest, NextResponse } from 'next/server'

const itemDetails = async (id: string) => {
	const res = await fetch(`${process.env.MELI_ITEM_URL}/${id}`)
	return res.json()
}
const itemDescription = async (id: string) => {
	const res = await fetch(`${process.env.MELI_ITEM_URL}/${id}/description`)
	return res.json()
}

export const POST = async (req: NextRequest) => {
	const id = (await req.json()).id
	const [details, description] = await Promise.all([itemDetails(id), itemDescription(id)])

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
		// no seller nickname
		seller_name: details.seller_id,
	}

	const response: ItemDetailsResponse_Type = { author: DefaultAuthor, item }

	// return
	return NextResponse.json(response)
}
