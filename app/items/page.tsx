'use client'

import { useEffect, useState } from 'react'
import { ItemListing_Type, SearchResponse_Type } from '@/types/api'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const Items = () => {
	const params = useSearchParams()
	const query = params.get('search')

	const [loading, setLoading] = useState(false)
	const [items, setItems] = useState<ItemListing_Type[]>([])

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
				items.map((item) => (
					<Link href={`items/${item.id}`} key={item.id}>
						{item.title}
					</Link>
				))
			)}
		</div>
	)
}

export default Items
