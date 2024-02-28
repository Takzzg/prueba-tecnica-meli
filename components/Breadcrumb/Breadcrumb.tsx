import React from 'react'
import styles from './Breadcrumb.module.scss'

const Breadcrumb = ({ items, separator = '>' }: { items: string[]; separator?: string }) => {
	return (
		<div className={styles.breadcrumb}>
			{items.map((cat, idx) => (
				<React.Fragment key={cat}>
					<span className={styles.item}>{cat}</span>
					{idx < items.length - 1 && separator}
				</React.Fragment>
			))}
		</div>
	)
}

export default Breadcrumb
