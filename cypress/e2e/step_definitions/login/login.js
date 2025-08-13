import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from "../../pages/LoginPage";

Given('Estou na tela de Login', () => {
    LoginPage.visit();
    cy.screenshot();
});

When('Inserir email e senha e clicar em Login', () => {
    LoginPage.login('standard_user', 'secret_sauce')
    cy.screenshot();
    LoginPage.clicarLogin();
});

Then('Sistema redireciona para a tela inicial', () => {
    cy.get('[data-test="title"]').should('contain', 'Products');
    cy.screenshot();
});
