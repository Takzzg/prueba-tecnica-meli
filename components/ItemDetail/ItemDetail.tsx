import Image from 'next/image'
import styles from './itemDetail.module.scss'
import Link from 'next/link'
import Shipping_Logo from '@/public/assets/ic_shipping@2x.png'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import { ItemDetailsResponse_Type } from '@/types/api'

const ItemDetail = (props: ItemDetailsResponse_Type) => {
	const { author, item, categories } = props
	const {
		id,
		picture,
		price,
		title,
		free_shipping,
		condition,
		description,
		location,
		seller_name,
		sold_quantity,
		permalink,
	} = item

	// show item details
	return (
		<div className={styles.mainContainer}>
			<Breadcrumb items={categories} />

			<div className={styles.itemDetail}>
				<div className={styles.itemPicture} data-cy='itemPicture'>
					<Image src={picture} alt='product picture' fill sizes='680px' />
				</div>
				<div className={styles.mainDetails}>
					<div className={styles.small}>
						<span>{condition}</span> - <span>{sold_quantity} vendidos</span>
					</div>

					<span className={styles.title}>{title}</span>

					<div className={styles.price}>
						<span className={styles.currency}>{price.currency}</span>${' '}
						<span className={styles.amount}>{price.amount}</span>
						{!!price.decimals && (
							<span className={styles.decimals}>.{price.decimals}</span>
						)}
					</div>

					<Link
						href={permalink}
						target='_blank'
						className={styles.buyButton}
						data-cy='buyButton'
					>
						Comprar
					</Link>

					{!!free_shipping && (
						<span className={styles.freeShipping}>
							<Image src={Shipping_Logo} alt='shipping' height={32} width={32} />
							Envio gratis!
						</span>
					)}

					<span className={styles.small}>{location}</span>

					{/* Seller ID, not name */}
					<span className={styles.small}>Vendedor: {seller_name}</span>
				</div>

				<div className={styles.descriptionContainer}>
					<span className={styles.title}>Descripción del producto</span>
					<span className={styles.desc}>{description}</span>
				</div>

				{/* <pre style={{ gridColumn: 'span 10', overflow: 'scroll' }}>
					{JSON.stringify(details, null, 4)}
				</pre> */}
			</div>
		</div>
	)
}

export default ItemDetail
