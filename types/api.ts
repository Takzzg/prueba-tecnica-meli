type AuthorSignature_Type = { name: string; lastname: string }

export type SearchResponse_Type = {
	author: AuthorSignature_Type
	categories: string[]
	items: ItemListing_Type[]
}

export type ItemListing_Type = {
	id: string
	title: string
	price: {
		currency: string
		amount: number
		decimals: number
	}
	picture: string
	condition: string
	free_shipping: boolean

	// Additional fields
	location: string
	seller_name: string
}

export type ItemDetails_type = {
	author: AuthorSignature_Type
	item: ItemListing_Type & { sold_quantity: number; description: string }
}
