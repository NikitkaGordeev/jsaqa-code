import login from "../../fixtures/login.json";
import sel from "../../fixtures/sel.json";

describe('movie tickets reservations screen', () => {

  it("Should show correct number of days", () => {
    cy.visit('/');
    cy.get(sel.dayWeek).should("have.length", 7);
  });

  login.forEach((data) => {
    it(`Should check admin invalid authorization ${data.invalidName}`, () => {
      cy.visit('/admin/');
      cy.contains(sel.email).type(data.invalidEmail);
      cy.contains(sel.pass).type(data.invalidPassword);
      cy.get(sel.logButt).click();
      cy.contains("Ошибка авторизации").should("be.visible");
    });
  });
});