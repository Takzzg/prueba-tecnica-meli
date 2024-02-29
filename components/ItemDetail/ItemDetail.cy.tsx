import React from 'react'
import ItemDetail from './ItemDetail'
import { mockItemDetail } from '@/cypress/fixtures/itemDetail'

describe('<ItemDetail />', () => {
	// see: https://on.cypress.io/mounting-react

	it('renders', () => {
		cy.mount(<ItemDetail {...mockItemDetail} />)
	})
})
