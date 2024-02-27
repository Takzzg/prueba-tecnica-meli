'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ItemDetails_Type, SearchResponse_Type } from '../../types/api/search'

const Items = () => {
	const [searchInput, setSearchInput] = useState('')
	const [items, setItems] = useState<ItemDetails_Type[]>([])

	const searchItemsByTitle = async () => {
		const res = await fetch(`/api/search?title=${searchInput}`)
		const data: SearchResponse_Type = await res.json()
		setItems(data.items || [])
	}

	return (
		<div className={'flex flex-col'}>
			{/* TEST Navbar */}
			<div className='flex'>
				Items
				<Link href={'/'}>Home</Link>
				<Link href={'/items/test'}>Item Desc Test</Link>
			</div>

			{/* TEST search bar */}
			<div className='flex'>
				<input
					type='text'
					value={searchInput}
					onChange={(event) => setSearchInput(event.target.value)}
					onKeyUp={(event) => (event.key === 'Enter' ? searchItemsByTitle() : undefined)}
				/>
				<button onClick={searchItemsByTitle} disabled={!searchInput}>
					Search
				</button>
			</div>

			{/* list items */}
			<div className='flex flex-col'>
				{items.map((item) => (
					<span key={item.id}>{item.title}</span>
				))}
			</div>
		</div>
	)
}

export default Items
