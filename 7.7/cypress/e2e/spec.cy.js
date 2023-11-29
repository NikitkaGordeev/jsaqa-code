import login from "..//fixtures/login.json";
import sel from "..//fixtures/sel.json";

describe('movie tickets reservations screen', () => {

  it("Should show correct number of days", () => {
    cy.visit('/');
    cy.get(sel.dayWeek).should("have.length", 7);
  });

  login.forEach((data) => {
    it(`Should check admin invalid authorization ${data.invalidName}`, () => {
      cy.visit('/admin');
      cy.contains(sel.email).type(data.invalidEmail);
      cy.contains(sel.pass).type(data.invalidPassword);
      cy.get(sel.logButt).click();
      cy.contains("Ошибка авторизации").should("be.visible");
    });
  });

  login.forEach((data) => {
    it(`Should check admin valid authorization ${data.validName}`, () => {
      cy.visit('/admin');
      cy.contains(sel.email).type(data.validEmail);
      cy.contains(sel.pass).type(data.validPassword);
      cy.get(sel.logButt).click();
      cy.contains("Управление залами").should("be.visible");
      cy.get(sel.admFilmText).then(($el) => $el.textContent).should('have.text', 'Зверополис');
      cy.get(sel.admFilmText).invoke('text').then((text) => {
        cy.visit("/client");
        cy.get(sel.dayWeek).should('have.length', 7);
        cy.get(sel.dayWeek3).click();
        cy.get(sel.mainFilmText).should('have.text', text);
      });
      cy.get('.movie').first().contains('11:00').click();
      const seats = require('../fixtures/seats.json');
      seats.forEach((seat) => {
        cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click();
      });
      cy.get(sel.button).click();
      cy.contains("Вы выбрали билеты:").should("be.visible");
    });
  });
});