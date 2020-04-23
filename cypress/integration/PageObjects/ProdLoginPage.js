/// <reference types="cypress" />

class ProdLoginPage {

	prodvisit() {

		cy.visit('https://developer.paypal.com/classic-home/')
		cy.get('.dx-auth-login').click()
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false
		})
	}

	fillProdEmail(value) {
		const field = cy.get('#email')
		field.clear()
		field.type(value)
		return this
	}

	clickPwdEmailButton() {

		cy.get('#btnNext').click()
	}
	fillProdPasswd(value) {
		const field = cy.get('#password')
		field.clear()
		field.type(value)
		return this
	}

	clickProdPwdButton() {

		cy.get('#btnLogin').click()
		cy.get('iframe').click()
	}


}

export default ProdLoginPage