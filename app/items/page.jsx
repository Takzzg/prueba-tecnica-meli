'use client'

import Link from 'next/link'

const searchTest = async () => {
	const res = await fetch('/api/search/')
	const data = await res.json()
	console.log('data', data)
}

const Items = () => {
	return (
		<div className={'flex flex-col'}>
			Items
			<Link href={'/'}>Home</Link>
			<Link href={'/items/test'}>Item Desc Test</Link>
			<button onClick={searchTest}>Search</button>
		</div>
	)
}

export default Items
