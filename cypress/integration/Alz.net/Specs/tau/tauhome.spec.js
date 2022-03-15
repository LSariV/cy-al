/// <reference types = "cypress" />
//import {Utility} from "../../../support/Utility"
import HomePage_PO from '../../../../support/pagesObjects/wdu/HomePage_PO'
import ContactUs_PO from '../../../../support/pagesObjects/wdu/contactusPage';

//const url = new Utility().getBaseUrl();

const homePage = new HomePage_PO();
const contactUsPage = new ContactUs_PO();

let username = "xyz" ; 
let pass = "ssot"
//comment1 
//comment2
describe('navigating to tau', () => {
    before(function () {
        cy.fixture('example').then(function (data) {
            globalThis.data = data
        })
    })


    it('go to home page', () => {

        //cy.visit(Cypress.config().baseUrl)
        homePage.visitHomepage()
        homePage.clickOn_ContactUs_Button()

    })

    it('submit contact form from config', () => {

        cy.visit(Cypress.config().baseUrl + "/Contact-Us/contactus.html")

        /* cy.get('[name="first_name"]').type("qa")
        cy.get('[name="last_name"]').type("env")
        cy.get('[name="email"]').type("qaenv@gmail.com")
        cy.get('textarea.feedback-input').type("this is test for qa env")
        cy.get('[type="submit"]').click()
        */
        // comented above code to take all the above data from page objects

        contactUsPage.contactForm_Submission(Cypress.config().firstname, Cypress.config().lastname, Cypress.config().email, Cypress.config().body, "h1", "Thank You for your Message!")


    })

    it('submit contact form using fixtures', () => {

        cy.visit(Cypress.config().baseUrl + "/Contact-Us/contactus.html")
        // cy.get('[name="first_name"]').type(data.name)
        // cy.get('[name="last_name"]').type("env")
        // cy.get('[name="email"]').type(data.email)
        // cy.get('textarea.feedback-input').type(data.body)
        // cy.get('[type="submit"]').click()
        // commented above code to get that fuction from page objects 
        contactUsPage.contactForm_Submission(data.firstname, data.lastname, data.email, data.body, "h1", "Thank You for your Message!")

    })


    it.only('submit contact form using congFiles via plugins', () => {

        cy.visit('/' + "/Contact-Us/contactus.html")
        // cy.get('[name="first_name"]').type(data.name)
        // cy.get('[name="last_name"]').type("env")
        // cy.get('[name="email"]').type(data.email)
        // cy.get('textarea.feedback-input').type(data.body)
        // cy.get('[type="submit"]').click()
        // commented above code to get that fuction from page objects 
        contactUsPage.contactForm_Submission(Cypress.env("firstname"), Cypress.env('lastname'),Cypress.env('email'), Cypress.env('body'), "h1", "Thank You for your Message!")
 
    })



})
