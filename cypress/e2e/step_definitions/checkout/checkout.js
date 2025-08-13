import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Checkout from "../../pages/Checkout";
import LoginPage from "../../pages/LoginPage";
import Products from "../../pages/Products";

Given('Estou logado no sistema', () => {
    LoginPage.visit();
    LoginPage.login('standard_user', 'secret_sauce');
    LoginPage.clicarLogin();
    Products.verificadorPagina('Products');
    cy.screenshot();
});

And('Possuo quatro produtos no carrinho', () => {
    Products.adicionarProdutosCarrinho('[data-test="add-to-cart-sauce-labs-backpack"]');
    Products.adicionarProdutosCarrinho('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    Products.adicionarProdutosCarrinho('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    Products.adicionarProdutosCarrinho('[data-test="add-to-cart-sauce-labs-onesie"]');

    Products.verificaQtdItensCarrinho('4');
    cy.screenshot();
});

And('Removo dois produtos do carrinho um na tela de produtos e outro na tela do carrinho', () => {
    Products.removerProdutosCarrinho('[data-test="remove-sauce-labs-fleece-jacket"]');

    Products.verificaQtdItensCarrinho('3');

    cy.screenshot();

    cy.get('[data-test="shopping-cart-link"]').click();
    Products.verificadorPagina('Your Cart');

    Products.removerProdutosCarrinho('[data-test="remove-sauce-labs-bolt-t-shirt"]');
    Products.verificaQtdItensCarrinho('2');

    cy.screenshot();
});

And('Avanco ate a tela de pagamento', () => {
    cy.get('[data-test="checkout"]').click();

    Products.verificadorPagina('Checkout: Your Information');

    cy.screenshot();
});

And('Preencho o formulário de checkout', () => {
    Checkout.preencherFormulario('ChampsQA', 'Tester', '22233345');
    cy.screenshot();
});

When('Finalizo a compra', () => {
    Products.verificadorPagina('Checkout: Overview');
    cy.get('[data-test="finish"]').click();
    cy.screenshot();
});

Then('Sistema deve exibir uma mensagem de sucesso', () => {
    Products.verificadorCompra('Checkout: Complete!');
    cy.screenshot();
});
