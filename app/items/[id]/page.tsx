import ItemDetail from '@/components/ItemDetail/ItemDetail'

const ItemDesc = ({ params }: { params: { id: string } }) => {
	return <ItemDetail params={params} />
}

export default ItemDesc
