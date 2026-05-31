describe('Flujo de compra SauceDemo', () => {

    it('Debe completar una compra exitosa', () => {

        // Abrir aplicación
        cy.visit('https://www.saucedemo.com/')

        // Login
        cy.get('[data-test="username"]')
            .type('standard_user')

        cy.get('[data-test="password"]')
            .type('secret_sauce')

        cy.get('[data-test="login-button"]')
            .click()

        // Validar login exitoso
        cy.url().should('include', '/inventory')

        // Agregar productos
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
            .click()

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
            .click()

        // Abrir carrito
        cy.get('.shopping_cart_link')
            .click()

        // Validar 2 productos
        cy.get('.cart_item')
            .should('have.length', 2)

        // Checkout
        cy.get('[data-test="checkout"]')
            .click()

        // Completar formulario
        cy.get('[data-test="firstName"]')
            .type('Alberto')

        cy.get('[data-test="lastName"]')
            .type('Soto')

        cy.get('[data-test="postalCode"]')
            .type('15001')

        cy.get('[data-test="continue"]')
            .click()

        // Finalizar compra
        cy.get('[data-test="finish"]')
            .click()

        // Validar mensaje final
        cy.get('.complete-header')
        .should('be.visible')
        .and('have.text', 'Thank you for your order!')

        // Captura de evidencia
        cy.screenshot('CompraExitosaa')
    })

})