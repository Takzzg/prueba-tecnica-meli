describe('Home Page', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('should have a <main> HTMLElement with "Home"', () => {
		cy.get('main').contains('Home')
	})

	it('should render a textInput via SearchBar', () => {
		cy.get('[data-cy="textInput"]').parents('[data-cy="searchBar"]')
	})

	it('should be able to search', () => {
		cy.get('[data-cy="textInput"]').type('Mouse{enter}')
		cy.get('[data-cy="textInput"]').should('have.value', 'Mouse')
		cy.url().should('contain', '/items?search=Mouse')
	})
})
