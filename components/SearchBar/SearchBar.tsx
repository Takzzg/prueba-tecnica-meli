'use client'

import styles from './SearchBar.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Logo_ML from '@/public/assets/Logo_ML@2x.png'
import Search_Icon from '@/public/assets/ic_Search@2x.png'

const SearchBar = () => {
	const router = useRouter()
	const [searchInput, setSearchInput] = useState('')

	const handleSearchAction = () => {
		router.push(`/items?search=${searchInput}`)
	}

	return (
		<div className={styles.searchBoxContainer} data-cy='searchBar'>
			<div className={styles.content}>
				<div className={styles.logoContainer}>
					<div className={styles.logoML}>
						<Image
							onClick={() => router.push('/')}
							src={Logo_ML}
							alt='Logo Mercado Libre'
							fill
							sizes='64px'
							priority={true}
							data-cy='logo'
						/>
					</div>
				</div>

				<div className={styles.inputContainer}>
					<input
						type='text'
						value={searchInput}
						onChange={(event) => setSearchInput(event.target.value)}
						onKeyUp={(event) =>
							event.key === 'Enter' ? handleSearchAction() : undefined
						}
						placeholder='Nunca dejes de buscar'
						className={styles.textInput}
						data-cy='textInput'
					/>
					<button
						onClick={handleSearchAction}
						disabled={searchInput.length < 3}
						className={styles.searchButton}
						data-cy='searchBtn'
					>
						<div className={styles.searchIcon}>
							<Image
								onClick={() => router.push('/')}
								src={Search_Icon}
								alt='Buscar'
								fill
								sizes='16px'
							/>
						</div>
					</button>
				</div>
			</div>
		</div>
	)
}

export default SearchBar
