

describe('Testes de buscas no blogdoagi', () => {
  
  it('Testar pesquisas no blog e validar os resultados', () => {
      
  cy.pesquisar('agibank credito');
  cy.validarPesquisa('agibank credito');
  cy.pesquisar('2023');
  cy.validarPesquisa('2023');
  cy.pesquisar('%');
  cy.validarPesquisa('%');

  })

})