'use client'

import styles from './items.module.scss'
import React, { useEffect, useState } from 'react'
import { ItemListing_Type, SearchResponse_Type } from '@/types/api'
import { useSearchParams } from 'next/navigation'
import ItemListing from '@/components/ItemListing/ItemListing'
import Pagination from '@/components/Pagination/Pagination'

const Items = () => {
	// read query from url
	const params = useSearchParams()
	const query = params.get('search')

	// setup states
	const [loading, setLoading] = useState(false)
	const [categories, setCategories] = useState<string[]>([])
	const [items, setItems] = useState<ItemListing_Type[]>([])
	const [pagination, setPagination] = useState(0)

	// call api whenever params change
	useEffect(() => {
		const searchItemsByTitle = async () => {
			setLoading(true)

			const res = await fetch(`/api/search?title=${query}`)
			const data: SearchResponse_Type = await res.json()
			setItems(data.items || [])
			setCategories(data.categories || [])
			setPagination(0)

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

			<Pagination
				componentList={items.map((item) => (
					<ItemListing item={item} key={item.id} />
				))}
				currentPage={pagination}
				changePage={setPagination}
				maxResultsPerPage={4}
			/>
		</div>
	)
}

export default Items
