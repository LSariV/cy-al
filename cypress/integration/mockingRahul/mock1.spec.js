/// <reference types = "cypress" />

describe("My First Test suite for Rahul Cypress api testing", function () {
    it('mocking', function () {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
       // cy.get("button[class ='btn btn-primary']").click();

        cy.intercept(


            {
                //api that needs to be intercepted // request object
                method: 'get',
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },


            {
                // responseobject , is the way we are changing or mocking the request
                // the above api will give response with losts of data, we are intercepting and asking api to display only one row of the data, check in postman

                statusCode: 200,
                body: [
                    {
                        "book_name": "RestAssured with Java",
                        "isbn": "RSU",
                        "aisle": "2301"
                    },
                  /*  {
                        "book_name": "hello dear",
                        "isbn": "abc",
                        "aisle": "2018"
                    } */
                ]


            }).as ('bookretrievals')
            cy.get("button[class ='btn btn-primary']").click();

            cy.wait('@bookretrievals')

            //validating the oops message if only one book is available
            cy.get('p').contains('Oops only 1 Book available')

//Intercepting response





    })
})