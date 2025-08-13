Feature: Checkout

  Scenario: Validar fluxo de compras
    Given Estou logado no sistema
    And Possuo quatro produtos no carrinho
    And Removo dois produtos do carrinho um na tela de produtos e outro na tela do carrinho
    And Avanco ate a tela de pagamento
    And Preencho o formulário de checkout
    When Finalizo a compra
    Then Sistema deve exibir uma mensagem de sucesso