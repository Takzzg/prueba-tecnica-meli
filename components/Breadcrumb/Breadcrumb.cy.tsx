import React from 'react'
import Breadcrumb from './Breadcrumb'

const testCategories = ['This', 'Are', 'Test', 'Categories']
const testSeparators = ['>', '-', '/', '&', '==>']

describe('<Breadcrumb />', () => {
	// see: https://on.cypress.io/mounting-react

	it('works with multiple categories', () => {
		cy.mount(<Breadcrumb items={testCategories} />)

		cy.get('[data-cy="breadcrumb"]')
			.children('[data-cy="category"]')
			.should('have.length', testCategories.length)

		cy.get('[data-cy="breadcrumb"]')
			.children('[data-cy="separator"]')
			.should('have.length', testCategories.length - 1)
	})

	it('works with 1 category', () => {
		const partialCategories = testCategories.slice(-1)
		cy.mount(<Breadcrumb items={partialCategories} />)

		cy.get('[data-cy="breadcrumb"]')
			.children('[data-cy="category"]')
			.should('have.length', partialCategories.length)

		cy.get('[data-cy="breadcrumb"]')
			.children('[data-cy="separator"]')
			.should('have.length', partialCategories.length - 1)
	})

	describe('works with different separators', () => {
		for (let index = 0; index < testSeparators.length; index++) {
			const sep = testSeparators[index]
			it(sep, () => {
				cy.mount(<Breadcrumb items={testCategories} separator={sep} />)

				cy.get('[data-cy="breadcrumb"]')
					.children('[data-cy="category"]')
					.should('have.length', testCategories.length)

				cy.get('[data-cy="breadcrumb"]')
					.children('[data-cy="separator"]')
					.should('have.length', testCategories.length - 1)
					.each(($el) => cy.wrap($el).contains(sep))
			})
		}
	})
})
