import { defineConfig } from 'cypress';
import {addMatchImageSnapshotPlugin} from '@simonsmith/cypress-image-snapshot/plugin';

export default defineConfig({
  // reporter: 'cypress-mochawesome-reporter',
  reporter: 'mocha-junit-reporter',
  e2e: {
    projectId: 'ysibnm',
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{spec,test}.{js,jsx}',
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 4000,
    retries: { runMode: 1, openMode: 0 },
    scrollBehavior: 'center',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addMatchImageSnapshotPlugin(on);
      // require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
