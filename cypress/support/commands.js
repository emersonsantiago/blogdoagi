// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('pesquisar', (texto) => { 

    cy.visit('https://blogdoagi.com.br/');
    cy.get('#overlay-open').click();
    cy.get('.mobile-search > .search-form > label > .search-field').type(texto);
    cy.get('.mobile-search > .search-form > label > .search-field').type('{enter}');

});

Cypress.Commands.add('validarPesquisa', (textoPesquisado) => { 

    cy.get('#blog-wrap').should('contain', 'Resultados da busca por: ' + textoPesquisado);

});

