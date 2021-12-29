/// <reference types="cypress" />

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config


  module.exports = (on, config) => {
    require('cypress-mochawesome-reporter/plugin')(on);
  };

  const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

  module.exports = (on) => {
    on('before:run', async (details) => {
      console.log('override before:run');
      await beforeRunHook(details);
    });
  
    on('after:run', async () => {
      console.log('override after:run');
      await afterRunHook();
    });
  };
}

  //Cypress lighthouse code from the npm site
  
  const { lighthouse, pa11y, prepareAudit } = require("cypress-audit");
 

module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on("task", {
    lighthouse: lighthouse(), // calling the function is important
    pa11y: pa11y(), // calling the function is important
  });
};
  
// code for cucumber taken from toolsqa

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}


//cypress\integration\Alz.net\Specs\blogTest.spec.js