import Link from 'next/link'

const ItemDesc = () => {
	return (
		<div className={'flex flex-col'}>
			ItemDesc
			<Link href={'/'}>Home</Link>
			<Link href={'/items'}>Items</Link>
		</div>
	)
}

export default ItemDesc
