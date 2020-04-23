/// <reference types="cypress" />

class InvokeSendMoneyFlow {

	invokeSendMoneyVisit() {

		cy.visit('/myaccount/transfer/homepage/pay')

	}

	enterReceiverEmailAddr(value) {
		const field = cy.get('#fn-sendRecipient')
		field.clear()
		field.type(value)
		cy.get('.ppvx_btn').click()
		return this

	}

	enterSendMoneyAmount(value) {
		const field = cy.get('#fn-amount')
		field.clear()
		field.type(value)
		return this
	}

	addNoteToSender(value) {

		const field = cy.get('._127mh5u')
		field.type(value)
		return this

	}

	addReceiverNameToSender(value) {

		const field = cy.get('.vx_form-control > label')
		field.type(value)
		return this
	}

	clickReviewButton() {

		cy.get('.css-1mggxor').click()
	}

	clickReviewConfirmationButton() {

		cy.get('[data-testid=ffcard] > :nth-child(1)').click()

	}

	selectPaymentMethodConfirmPage() {

		cy.get('._1hdxgac').click()

	}

	ClickFinalPaymentButton() {

		cy.get('.css-1mggxor').click()

	}


}

export default InvokeSendMoneyFlow