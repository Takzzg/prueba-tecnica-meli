import ItemDetail from '@/components/ItemDetail/ItemDetail'
import { ItemDetailsResponse_Type } from '@/types/api'

const ItemDesc = async ({ params }: { params: { id: string } }) => {
	// dirty id check. FIX!
	if (!params.id.includes('MLA')) return <div>invalid ID</div>

	// fetch item details
	const res = await fetch(process.env.SITE_URL + '/api/details/', {
		method: 'POST',
		body: JSON.stringify({ itemID: params.id }),
	})
	const details: ItemDetailsResponse_Type = await res.json()

	return <ItemDetail {...details} />
}

export default ItemDesc
