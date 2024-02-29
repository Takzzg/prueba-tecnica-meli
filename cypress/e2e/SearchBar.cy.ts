describe('SearchBar', () => {
	describe('Logo', () => {
		it('redirects to Home on click', () => {
			cy.visit('/items?search=Mouse')
			cy.get('[data-cy="logo"]').click()
			cy.location('pathname').should('eq', '/')
		})
	})

	describe('Text Input', () => {
		beforeEach(() => cy.visit('/'))

		it('starts empty', () => {
			cy.get('[data-cy="textInput"]').should('have.value', '')
		})

		it('updates on type', () => {
			cy.get('[data-cy="textInput"]').type('M')
			cy.get('[data-cy="textInput"]').should('not.have.value', '')
			cy.get('[data-cy="textInput"]').type('o')
			cy.get('[data-cy="textInput"]').should('not.have.value', 'M')
			cy.get('[data-cy="textInput"]').type('u')
			cy.get('[data-cy="textInput"]').should('not.have.value', 'Mo')
			cy.get('[data-cy="textInput"]').type('s')
			cy.get('[data-cy="textInput"]').should('not.have.value', 'Mou')
			cy.get('[data-cy="textInput"]').type('e')
			cy.get('[data-cy="textInput"]').should('not.have.value', 'Mous')

			cy.get('[data-cy="textInput"]').should('have.value', 'Mouse')
			cy.get('[data-cy="textInput"]').type('{backspace}')
			cy.get('[data-cy="textInput"]').type('{backspace}')
			cy.get('[data-cy="textInput"]').type('{backspace}')
			cy.get('[data-cy="textInput"]').type('{backspace}')
			cy.get('[data-cy="textInput"]').type('{backspace}')
			cy.get('[data-cy="textInput"]').should('have.value', '')
		})
	})

	describe('Search Button', () => {
		beforeEach(() => cy.visit('/'))

		it('should be disabled', () => {
			cy.get('[data-cy="searchBtn"]').should('be.disabled', true)
		})

		it('should enable with 3 or more letters', () => {
			cy.get('[data-cy="textInput"]').should('have.value', '')
			cy.get('[data-cy="searchBtn"]').should('be.disabled')

			cy.get('[data-cy="textInput"]').type('Mouse')

			cy.get('[data-cy="textInput"]').should('have.value', 'Mouse')
			cy.get('[data-cy="searchBtn"]').should('not.be.disabled')
		})

		it('should disable after going below 3', () => {
			cy.get('[data-cy="textInput"]').should('have.value', '')
			cy.get('[data-cy="searchBtn"]').should('be.disabled')

			cy.get('[data-cy="textInput"]').type('Mouse')

			cy.get('[data-cy="textInput"]').should('have.value', 'Mouse')
			cy.get('[data-cy="searchBtn"]').should('not.be.disabled')

			cy.get('[data-cy="textInput"]').type('{backspace}')
			cy.get('[data-cy="textInput"]').type('{backspace}')
			cy.get('[data-cy="textInput"]').type('{backspace}')

			cy.get('[data-cy="searchBtn"]').should('be.disabled')
		})

		it('can be clicked to search', () => {
			cy.get('[data-cy="textInput"]').type('Mouse')
			cy.get('[data-cy="searchBtn"]').should('not.be.disabled')
			cy.get('[data-cy="searchBtn"]').click()
			cy.url({ decode: true }).should('contain', '/items?search=Mouse')
		})
	})

	const testSearchArray = (description: string, array: string[]) => {
		describe(description, () => {
			beforeEach(() => cy.visit('/'))

			for (let index = 0; index < array.length; index++) {
				const prod = array[index]

				it(`/items?search=${prod}`, () => {
					cy.get('[data-cy="textInput"]').type(`${prod}{enter}`)
					cy.url({ decode: true }).should('contain', `/items?search=${prod}`)
				})
			}
		})
	}

	describe('On Search', () => {
		const randomProducts = [
			'Rana',
			'Video',
			'Almacenamiento',
			'Manguera',
			'Bombero',
			'Vagabundo',
			'Aula',
			'Reparto',
			'Gerente',
			'Imaginación',
			'Tiempo',
			'Canal',
			'Pegamento',
			'Sofá',
			'Cera',
			'Camiones',
			'Dinosaurios',
			'Hallazgo',
			'Maíz',
			'Ministro',
			'Profesor',
			'Rol',
			'Carcaj',
			'Size',
			'Obligación',
			'Página',
			'Lago',
			'Lagartos',
			'Colcha',
			'Zoo',
			'Humor',
			'Cepillo de dientes',
			'Conejos',
			'Botes',
			'Ubicación',
			'Diente',
			'Encaje',
			'Hilo',
			'Aguja e',
			'Gabinete',
		]

		// pick 5 items at random
		const pickedProducts: string[] = []
		for (let index = 0; index < 5; index++)
			pickedProducts.push(randomProducts[Math.round(Math.random() * randomProducts.length)])

		// test for random items
		testSearchArray('redirects to appropiate url', pickedProducts)

		// test for words with special characters
		const specialChars = ['Sillón', 'Ubicación', 'M&M', 'Cañon', '007', '_', '.', ',', '/', '}']
		// Char '}' creaks cy.type() => Unknown command: {{enter}
		testSearchArray('works with special characters', specialChars)
	})
})
