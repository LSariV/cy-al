/// <reference types = "cypress" />

describe('alz performance test', () => {

    it('perf', () => {
        cy.visit('https://www.alzheimers.net/')
        cy.lighthouse(
            {
                accessibility: 50,
                'best-practices': 50,
                seo: 50,
                pwa: 10,
            },
            
            {
formFactor: 'desktop',
screenEmulation: {disabled:true},

            });

        const VALID_BROWSERS = {
            Chrome: true,
            Chromium: true,
            Canary: true,
        };
    })

})