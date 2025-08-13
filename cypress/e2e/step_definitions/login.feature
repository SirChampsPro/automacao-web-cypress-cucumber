Feature: Login

    Scenario: Login com sucesso
        Given Estou na tela de Login
        When Inserir email e senha e clicar em Login
        Then Sistema redireciona para a tela inicial
