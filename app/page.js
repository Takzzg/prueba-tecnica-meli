import Link from 'next/link'
// import styles from './page.module.scss'

const Home = () => {
	return (
		<main className={'flex flex-col'}>
			Home
			<Link href={'/items'}>Items</Link>
			<Link href={'/items/test'}>Item Desc Test</Link>
		</main>
	)
}

export default Home
