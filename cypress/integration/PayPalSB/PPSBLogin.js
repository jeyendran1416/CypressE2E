describe('My First Test', () => {
	it('Does not do much!', () => {
        expect(true).to.equal(true)
        cy.visit('https://developer.paypal.com/classic-home/')

	})
})