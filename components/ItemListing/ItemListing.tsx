import styles from './ItemListing.module.scss'
import { ItemListing_Type } from '@/types/api'
import Image from 'next/image'
import Link from 'next/link'
import Shipping_Logo from '@/public/assets/ic_shipping.png'

// redable mapping for item condition
const conditionMapping = { new: 'Nuevo', used: 'Usado' }

const ItemListing = ({ item }: { item: ItemListing_Type }) => {
	const { id, picture, price, title, free_shipping, condition } = item

	return (
		<Link href={`items/${id}`} className={styles.itemListing}>
			<div className={styles.itemPicture}>
				<Image src={picture} alt={'Item picture'} fill sizes='180px' />
			</div>

			<div className={styles.itemDetails}>
				<div className={styles.itemPrice}>
					<span className={styles.currency}>{price.currency}</span>${' '}
					<span className={styles.amount}>{price.amount}</span>
					{!!price.decimals && <span className={styles.decimals}>.{price.decimals}</span>}
				</div>

				{!!free_shipping && (
					<span className={styles.freeShipping}>
						<Image src={Shipping_Logo} alt='shipping' />
						Envio gratis!
					</span>
				)}

				<span className={styles.itemTitle}>{title}</span>
			</div>

			<div className={styles.sellerDetails}>
				<span className={styles.condition}>{conditionMapping[condition]}</span>
				{/* No location provided ??? */}
				<span className={styles.location}>location ?</span>
				<span className={styles.seller}>{item.seller_name}</span>
			</div>
		</Link>
	)
}

export default ItemListing
