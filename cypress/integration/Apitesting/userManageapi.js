

/// <reference types = "cypress" />

describe("Api testing from resreq ", function () {

    it('get function testing', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {

            expect(response.status).to.equal(200)
            expect(response.body.data[1].first_name).equal("Lindsay")


        })




    })

    it('POST function testing', () => {
        var user = {
            "name": "soma",
            "job": "hr"
        }

        cy.request('POST', 'https://reqres.in/api/users',user).then((resp) => {
            expect(resp.status).equal(201)
            expect(resp.body.name).equal(user.name)


        })
    })


    it('UPDATE function testing', () => {
        var user = {
            "name": "sumi",
            "job": "qa test"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2',user).then((resp) => {
            expect(resp.status).equal(200)
            expect(resp.body.name).equal(user.name)


        })
    })

    it('Delete function testing', () => {
        var user = {
            "name": "sumi",
            "job": "qa test"
        }
        cy.request('Delete', 'https://reqres.in/api/users/2',user).then((resp) => {
            expect(resp.status).equal(204)
           // expect(resp.body.name).equal(user.name)


        })
    })

})
