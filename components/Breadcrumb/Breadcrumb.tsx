import React from 'react'
import styles from './Breadcrumb.module.scss'

const Breadcrumb = ({ items, separator = '>' }: { items: string[]; separator?: string }) => {
	return (
		<div className={styles.breadcrumb} data-cy='breadcrumb'>
			{items.map((cat, idx) => (
				<React.Fragment key={cat}>
					<span data-cy='category' className={styles.item}>
						{cat}
					</span>
					{idx < items.length - 1 && <span data-cy='separator'>{separator}</span>}
				</React.Fragment>
			))}
		</div>
	)
}

export default Breadcrumb
