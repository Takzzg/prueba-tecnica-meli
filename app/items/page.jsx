import Link from 'next/link'

const Items = () => {
	return (
		<div className={'flex flex-col'}>
			Items
			<Link href={'/'}>Home</Link>
			<Link href={'/items/test'}>Item Desc Test</Link>
		</div>
	)
}

export default Items
