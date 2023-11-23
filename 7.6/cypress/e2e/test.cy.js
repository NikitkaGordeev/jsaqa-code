let book;

beforeEach(() => {
 cy.viewport(Cypress.env("viewportWidth"), Cypress.env("viewportHeight"))
 cy.visit('/');
 cy.login('test@test.com', 'test');
});

it('Checking page display', () => {
 cy.get('.text-light > .ml-2').should("be.visible");
  });

it('Should book be added', () => {
 cy.addBook(book);
});
it('Should add to favorites', () => {
 cy.addBook(book)
 cy.get("#root > div > div > div > a:nth-child(1) > div > div.card-footer > button").click();
 cy.visit('http://localhost:3000/favorites');
 cy.contains('Азбука').should("be.visible");
});
it('Should delete to favorites', () =>{
 cy.get("#root > div > div > div > a:nth-child(1)").click();
 cy.visit('http://localhost:3000/favorites');
 cy.contains('Delete from favorite').click();
 cy.contains('Please add some book to favorit on home page!').should("be.visible");
});