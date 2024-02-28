import styles from './Pagination.module.scss'

type PaginationProps_Type = {
	componentList: JSX.Element[]
	maxResultsPerPage: number
	currentPage: number
	changePage: Function
}

const Pagination = (props: PaginationProps_Type) => {
	const { componentList, maxResultsPerPage, currentPage, changePage } = props

	const firstPage = 0
	const lastPage = Math.floor((componentList.length - 1) / maxResultsPerPage)

	const previousPages: JSX.Element[] = []
	const nextPages: JSX.Element[] = []

	for (let index = currentPage - 1; index > currentPage - maxResultsPerPage; index--)
		if (index >= 0)
			previousPages.push(
				<button key={'page_' + index} onClick={() => changePage(index)}>
					{index}
				</button>
			)
	previousPages.reverse()

	for (let index = currentPage + 1; index < currentPage + maxResultsPerPage; index++)
		if (index <= lastPage)
			nextPages.push(
				<button key={'page_' + index} onClick={() => changePage(index)}>
					{index}
				</button>
			)

	const PageButtons = () => (
		<span className={styles.pageButtons}>
			<button onClick={() => changePage(firstPage)} disabled={currentPage === firstPage}>
				&lt;&lt;
			</button>
			<button
				onClick={() => changePage(currentPage - 1)}
				disabled={currentPage === firstPage}
			>
				&lt;
			</button>
			{previousPages}
			<button disabled className={styles.activePage}>
				{currentPage}
			</button>
			{nextPages}
			<button onClick={() => changePage(currentPage + 1)} disabled={currentPage === lastPage}>
				&gt;
			</button>
			<button onClick={() => changePage(lastPage)} disabled={currentPage === lastPage}>
				&gt;&gt;
			</button>
		</span>
	)

	const showedElements: JSX.Element[] = []
	for (
		let index = currentPage * maxResultsPerPage;
		index < currentPage * maxResultsPerPage + maxResultsPerPage;
		index++
	)
		if (componentList[index]) showedElements.push(componentList[index])

	return (
		<div className={styles.pagination}>
			<PageButtons />
			{showedElements}
			<PageButtons />
		</div>
	)
}

export default Pagination
