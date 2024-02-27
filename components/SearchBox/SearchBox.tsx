'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SearchBox = () => {
	const router = useRouter()
	const [searchInput, setSearchInput] = useState('')

	const handleSearchAction = () => {
		router.push(`/items?search=${searchInput}`)
	}

	return (
		<div className='flex' style={{ gap: '1rem' }}>
			<Link href={'/'}>Home</Link>

			<div className='flex'>
				<input
					type='text'
					value={searchInput}
					onChange={(event) => setSearchInput(event.target.value)}
					onKeyUp={(event) => (event.key === 'Enter' ? handleSearchAction() : undefined)}
				/>
				<button onClick={handleSearchAction} disabled={!searchInput}>
					Search
				</button>
			</div>
		</div>
	)
}

export default SearchBox
