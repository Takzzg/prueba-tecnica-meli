type AuthorSignature_Type = { name: string; lastname: string }
export const DefaultAuthor: AuthorSignature_Type = { name: 'Guido', lastname: 'Queiroz' }

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

export type ItemDetails_Type = ItemListing_Type & {
	sold_quantity: number
	description: string

	// Additional fields
	permalink: string
}

export type ItemDetailsResponse_Type = {
	author: AuthorSignature_Type
	item: ItemDetails_Type

	// Additional fields
	categories: string[]
}
