'use client'

import { useEffect, useState } from 'react'
import { ItemDetails_Type, SearchResponse_Type } from '../../types/api/search'
import { useSearchParams } from 'next/navigation'

const Items = () => {
	const params = useSearchParams()
	const [loading, setLoading] = useState(false)
	const [items, setItems] = useState<ItemDetails_Type[]>([])

	const query = params.get('search')
	console.log('query', query)

	// call api whenever params change
	useEffect(() => {
		const searchItemsByTitle = async () => {
			setLoading(true)

			const res = await fetch(`/api/search?title=${query}`)
			const data: SearchResponse_Type = await res.json()
			setItems(data.items || [])

			setLoading(false)
		}
		searchItemsByTitle()
	}, [query])

	return (
		<div className={'flex flex-col'}>
			{loading ? (
				<div>Buscando...</div>
			) : (
				items.map((item) => <span key={item.id}>{item.title}</span>)
			)}
		</div>
	)
}

export default Items
