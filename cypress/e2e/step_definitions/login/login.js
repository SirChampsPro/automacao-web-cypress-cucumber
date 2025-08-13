import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from "../../pages/LoginPage";

Given('Estou na tela de Login', () => {
    LoginPage.visit();
    cy.screenshot();
});

When('Inserir email e senha e clicar em Login', () => {
    LoginPage.login('standard_user', 'secret_sauce')
    cy.screenshot();
});

Then('Sistema redireciona para a tela inicial', () => {
    LoginPage.clicarLogin();
    cy.get('[data-test="title"]').should('contain', 'Products');
    cy.screenshot();
});
