/// <reference types="cypress" />

class SandBoxLoginPage {

	sandboxvisit() {

		cy.visit('/in/webapps/mpp/merchant')

	}

	clickCredButton() {

		cy.get('#ul-btn').click()
	}

	fillSandBoxEmail(value) {
		const field = cy.get('#email')
		field.clear()
		field.type(value)
		return this
	}

	fillSandBoxPasswd(value) {
		const field = cy.get('#password')
		field.clear()
		field.type(value)
		return this
	}

	clickLoginButton() {

		cy.get('#btnLogin').click()

	}


}

export default SandBoxLoginPage