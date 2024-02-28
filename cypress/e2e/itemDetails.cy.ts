const randomItemIDs = ['MLA1408167253', 'MLA1129921078', 'MLA1663051160']

describe('Item Details', () => {
	for (let index = 0; index < randomItemIDs.length; index++) {
		const id = randomItemIDs[index]

		describe(id, () => {
			it('renders item', () => {
				cy.visit('/items/' + id)
				cy.get('div[data-cy="itemPicture"] > img').should('have.length', 1)
				cy.get('a[data-cy="buyButton"]').contains('Comprar')
			})

			it('redirects to ML', () => {
				cy.visit('/items/' + id)
				cy.get('a[data-cy="buyButton"]')
					.should('have.attr', 'href')
					.should('include', id.slice(0, 3) + '-' + id.slice(3))
			})
		})
	}
})
