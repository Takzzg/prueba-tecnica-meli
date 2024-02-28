'use client'

import styles from './items.module.scss'
import React, { useEffect, useState } from 'react'
import { ItemListing_Type, SearchResponse_Type } from '@/types/api'
import { useSearchParams } from 'next/navigation'
import ItemListing from '@/components/ItemListing/ItemListing'

const Items = () => {
	const params = useSearchParams()
	const query = params.get('search')

	const [loading, setLoading] = useState(false)
	const [categories, setCategories] = useState<string[]>([])
	const [items, setItems] = useState<ItemListing_Type[]>([])

	// call api whenever params change
	useEffect(() => {
		const searchItemsByTitle = async () => {
			setLoading(true)

			const res = await fetch(`/api/search?title=${query}`)
			const data: SearchResponse_Type = await res.json()
			setItems(data.items || [])
			setCategories(data.categories || [])

			setLoading(false)
		}
		searchItemsByTitle()
	}, [query])

	if (loading) return <div>Buscando...</div>

	return (
		<div className={styles.searchResults}>
			<div className={styles.categoriesBreadcrumb}>
				{categories.map((cat, idx) => (
					<React.Fragment key={cat}>
						<span className={styles.category}>{cat}</span>
						{idx < categories.length - 1 && '>'}
					</React.Fragment>
				))}
			</div>

			{items.map((item) => (
				<ItemListing item={item} key={item.id} />
			))}
		</div>
	)
}

export default Items
