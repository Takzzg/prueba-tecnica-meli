import { ItemDetails_type } from '@/types/api'

const itemDetails = async (id: string) => {
	const res = await fetch(`${process.env.MELI_ITEM_URL}/${id}`)
	return res.json()
}
const itemDescription = async (id: string) => {
	const res = await fetch(`${process.env.MELI_ITEM_URL}/${id}/description`)
	return res.json()
}

const fetchItem = async (id: string) => {
	const [details, description] = await Promise.all([itemDetails(id), itemDescription(id)])

	const item: ItemDetails_type = {
		author: { name: 'Guido', lastname: 'Queiroz' },
		item: {
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
		},
	}

	return item
}

const ItemDesc = async ({ params }: { params: { id: string } }) => {
	const details = await fetchItem(params.id)

	return (
		<div>
			<pre>{JSON.stringify(details, null, 4)}</pre>
		</div>
	)
}

export default ItemDesc
