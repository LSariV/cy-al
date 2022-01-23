export class Utility{
    
getBaseUrl(){

    let envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envi == 'production') //Check the value
            return "https://www.allzheimers.net/"; //return desired url
        else if (envi == 'staging')
            return "http://www.myspicyhut.com/";
        else if (envi == 'qa')
            return "https://www.qa.alzheimers.net/";

        }




}