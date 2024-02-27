import { Inter } from 'next/font/google'
import './globals.scss'
import SearchBox from '@/components/SearchBox/SearchBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Prueba Tecnica MELI',
	description: 'Generated by create next app, developed by Guido',
}

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<SearchBox />
				<div className='children-container'>{children}</div>
			</body>
		</html>
	)
}

export default RootLayout
