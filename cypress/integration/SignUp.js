import CreateSignUp from '../integration/CreateSignUp';


const createSignUp = new CreateSignUp; 
const data = '../fixtures/testData.json';

describe('Ensure user can Sign Up', () => {
    it('Open Amazon Website', () => {
        //open Amazon Website
        cy.fixture(data).then((data) => {
            cy.visit(data.urlAmazonWeb)
        })
        //Select Button Start 
        createSignUp.selectButtonStart();

        //Input Field Sign Up
       cy.fixture(data).as('data').then(data => {
           createSignUp.inputName(data.name);
           createSignUp.inputEmail(data.email);
           createSignUp.inputPassword(data.password);
           createSignUp.inpuRepassword(data.password);
       })
       createSignUp.getButtonSubmit();

    })
})