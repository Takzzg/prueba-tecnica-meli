import { ItemDetailsResponse_Type } from '@/types/api'

export const mockItemDetail: ItemDetailsResponse_Type = {
	author: { name: 'Guido', lastname: 'Queiroz' },
	categories: ['Computación', 'Periféricos de PC', 'Mouses y Teclados', 'Mouses'],
	item: {
		id: 'MLA1663051160',
		title: 'Mouse Gamer De Juego Logitech G  G Series Lightsync G203 Negro',
		price: { currency: 'ARS', amount: 35827, decimals: undefined },
		picture: 'http://http2.mlstatic.com/D_605478-MLU72756924884_112023-I.jpg',
		condition: 'new',
		free_shipping: true,
		sold_quantity: 53,
		description:
			'Para trabajar desde casa con la computadora o aprovechar los momentos de ocio, necesitás comodidad y facilidad de movimiento. Con tu Logitech G Lightsync encontrá eso que buscás en un solo aparato con la mejor tecnología.\n' +
			'\n' +
			'Adaptado a tus movimientos\n' +
			'El mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.\n' +
			'\n' +
			'La funcionalidad al alcance de tu mano\n' +
			'El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.\n' +
			'\n' +
			'Plug And Play\n' +
			'Solo debés colocar el receptor en un puerto USB de la computadora y ya podés empezar a usarlo. No hace falta emparejar el mouse ni descargar software para utilizarlo.\n' +
			'\n' +
			'Apto para fácil traslado\n' +
			'Navegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.',
		location: 'Rosario, Santa Fe, Argentina',
		permalink:
			'https://articulo.mercadolibre.com.ar/MLA-1663051160-mouse-gamer-de-juego-logitech-g-g-series-lightsync-g203-negro-_JM',
		seller_name: '621229920',
	},
}
