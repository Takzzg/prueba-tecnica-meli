export type SearchResponse_Type = {
	author: { name: String; lastname: String }
	categories: String[]
	items: ItemDetails_Type[]
}

export type ItemDetails_Type = {
	id: string
	title: string
	price: {
		currency: String
		amount: number
		decimals: number
	}
	picture: String
	condition: String
	free_shipping: boolean
}
