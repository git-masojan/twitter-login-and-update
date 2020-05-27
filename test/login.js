// <reference types="cypress" />
const username = process.env.username
const password = process.env.password
//email dan password diisi dengan credential usernya


    it('@login Login to twitter', () => {
      // https://on.cypress.io/type
      cy.visit('https://www.twitter.com/')
      //login
      cy.get('text["Log In"]').click('button[data-testid="login"]')
    })
