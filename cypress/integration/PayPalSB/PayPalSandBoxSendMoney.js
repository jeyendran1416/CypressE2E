/// <reference types="cypress" />

import ProdLoginPage from '../PageObjects/ProdLoginPage'
import SandBoxLoginPage from '../PageObjects/SandBoxLoginPage'
import InvokeSendMoneyFlow from '../PageObjects/InvokeSendMoneyFlow'

describe('PayPal SandBox Suite', () => {

	var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
	var string = '';
	for (var ii = 0; ii < 15; ii++) {
		string += chars[Math.floor(Math.random() * chars.length)];
	}
	const receiverEmail = (string + '@gmail.com');

	const prodLoginPage = new ProdLoginPage()
	const sandBoxLoginPage = new SandBoxLoginPage()
	const sendMoneyFlow = new InvokeSendMoneyFlow()

	const prodemail = "jeyendran.kathirvel@gmail.com"
	const prodpwd = "AddYours"
	const sbEmail = "jey-cc1@paypal.com"
	const sbPwd = "stage2@qa"
	const amount = "8.00",
		note = "Happy Shopping",
		receiverName = "Jeyendran Kathirvel";


	it('PayPal SB SendMoney Transaction', () => {

		//Productin Page Login

		prodLoginPage.prodvisit()
		prodLoginPage.fillProdEmail(prodemail)
		prodLoginPage.clickPwdEmailButton()
		prodLoginPage.fillProdPasswd(prodpwd)
		prodLoginPage.clickProdPwdButton()

		// Sandbox Login

		sandBoxLoginPage.sandboxvisit()
		sandBoxLoginPage.clickCredButton()
		sandBoxLoginPage.fillSandBoxEmail(sbEmail)
		sandBoxLoginPage.fillSandBoxPasswd(sbPwd)
		sandBoxLoginPage.clickLoginButton()

		//SendMoney Flow

		sendMoneyFlow.invokeSendMoneyVisit()
		sendMoneyFlow.enterReceiverEmailAddr(receiverEmail)
		sendMoneyFlow.enterSendMoneyAmount(amount)
		sendMoneyFlow.addNoteToSender(note)
		sendMoneyFlow.addReceiverNameToSender(receiverName)
		sendMoneyFlow.clickReviewButton()
		sendMoneyFlow.clickReviewConfirmationButton()
		sendMoneyFlow.selectPaymentMethodConfirmPage()
		sendMoneyFlow.ClickFinalPaymentButton()


	})
})