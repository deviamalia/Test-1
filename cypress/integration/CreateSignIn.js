class CreateSignIn {
getButtonSignIn(){return cy.xpath('//div[@id="nav-flyout-ya-signin"]//span[@class="nav-action-inner"][normalize-space()="Sign in"]')};
getFieldEmail(){return cy.xpath('//input[@id="ap_email"]')};
getButtonEmail(){return cy.get('.a-button-inner > #continue')}
getFieldPassword(){return cy.xpath('//input[@id="ap_password"]')}
getButtonPassword(){return cy.get('#signInSubmit')};




selectButtonSignIn(){
    return this.getButtonSignIn()
    .click({force: true})
};

inputEmail(email){
    return this.getFieldEmail()
    .type(`${email}`)
};

selectButtonEmail(){
    return this.getButtonEmail()
    .click({force: true})
};

inputPassword(password){
    return this.getFieldPassword()
    .type(`${password}`)
}

selectButtonPassword(){
    return this.getButtonPassword()
    .click({force: true})
}

}
export default CreateSignIn