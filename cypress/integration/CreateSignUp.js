class CreateSignUp {

    getButtonStart(){return cy.xpath('//div[@id="nav-flyout-ya-newCust"]//a[@class="nav-a"][normalize-space()="Start here."]')};
    getFieldName(){return cy.xpath('//input[@id="ap_customer_name"]')};
    // getCodeNumber(){return cy.xpath('//span[@class="a-dropdown-prompt"]')};
    getFieldEmail(){return cy.get('#ap_email')};
    getFieldPassword(){return cy.xpath('//input[@id="ap_password"]')};
    getFieldRepassword(){return cy.xpath('//input[@id="ap_password_check"]')};
    getButtonSubmit(){return cy.get('#continue')};


    selectButtonStart(){
        return this.getButtonStart()
        .click({force: true})
    };

    inputName(name){
        return this.getFieldName()
        .type(`${name}`)
    };

    inputEmail(email){
        return this.getFieldEmail()
        .type(`${email}`)
    };
    
    inputPassword(password){
        return this.getFieldPassword()
        .type(`${password}`)
    };

    inpuRepassword(repassword){
        return this.getFieldRepassword()
        .type(`${repassword}`)
    };

    selectButtonSubmit(){
        return this.getButtonSubmit()
        .click()
        .type(`{enter}`)
    };

}
export default CreateSignUp