import CreateSignIn from '../integration/CreateSignIn'

const createSignIn = new CreateSignIn;
const data = '../fixtures/testData.json';


describe('Ensure user can Sign In', () => {
    it('TC02', () => {
        //open website amazon
        cy.fixture(data).then((data) => {
            cy.visit(data.urlAmazonWeb)
        })
        //select button Sign In
        createSignIn.selectButtonSignIn();

        //input email 
        cy.fixture(data).as(`data`).then(data => {
            createSignIn.inputEmail(data.email)
        });

        //select button Email
        createSignIn.selectButtonEmail(); 

        //input Password 
        cy.fixture(data).as(`data`).then(data => {
            createSignIn.inputPassword(data.password)
        });

        //select button Passwod
        createSignIn.selectButtonPassword();

    })
})