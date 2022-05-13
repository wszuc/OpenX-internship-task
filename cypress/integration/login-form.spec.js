/// <reference types="cypress" />


describe('Login form testing', () => {
    const login = 'xyz';
    const password = 'pwd';



    it('is a correct website', () => {
        cy.visit('http://uitestingplayground.com/sampleapp');
        cy.contains('Sample App');
    })

    it('succesful login while typing valid data', () => {
        const loginMessage = `Welcome, ${login}!`;
        cy.get('input[name=UserName]').type(login);
        cy.get('input[name=Password]').type(password);
        cy.contains('Log In').click();
        cy.contains(loginMessage);
    })
    it('succesful logout while being logged in', () => {
        const logoutMessage = 'User logged out.';
        cy.contains('Log Out').click();
        cy.contains(logoutMessage);
    })
    it('denies wrong or blank credentials', () => {
        const failiureMessage = 'Invalid username/password';
        cy.visit('http://uitestingplayground.com/sampleapp');
        cy.get('input[name=UserName]').type(login);
        cy.get('input[name=Password]').type('wrong-pwd');
        cy.contains('Log In').click();
        cy.get('input[name=UserName]').type(login);
        cy.get('input[name=Password]').type(' pwd');
        cy.contains('Log In').click();
        cy.get('input[name=UserName]').type(login);
        cy.get('input[name=Password]').type('PWD');
        cy.contains('Log In').click();
        cy.contains('Log In').click();
        cy.contains(failiureMessage);
    })
    it('responds correctly for unusual input', () => {
        const failiureMessage = 'Invalid username/password'
        let weirdInput = '   %    ';

        cy.visit('http://uitestingplayground.com/sampleapp');
        cy.get('input[name=UserName]').type(weirdInput);
        cy.get('input[name=Password]').type(weirdInput);
        cy.contains('Log In').click();
        cy.contains(failiureMessage);
        weirdInput = '😀≅Ἡ© ';
        cy.get('input[name=UserName]').type(weirdInput);
        cy.get('input[name=Password]').type(weirdInput);
        cy.contains('Log In').click();
        cy.contains(failiureMessage);
    })
    it('responds correctly for malicious input', () => {
        const failiureMessage = 'Invalid username/password'
        let sqlInjection = 'X OR 1=1';

        cy.visit('http://uitestingplayground.com/sampleapp');
        cy.get('input[name=UserName]').type(sqlInjection);
        cy.get('input[name=Password]').type(sqlInjection);
        cy.contains('Log In').click();
        cy.contains(failiureMessage);
        sqlInjection = '" or ""="';
        cy.get('input[name=UserName]').type(sqlInjection);
        cy.get('input[name=Password]').type(sqlInjection);
        cy.contains('Log In').click();
        cy.contains(failiureMessage);
    })
})