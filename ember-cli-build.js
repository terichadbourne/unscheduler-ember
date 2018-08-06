/* eslint-env node */
/* global require, module */
const EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    eslint: {
      testGenerator: 'qunit',
      group: true,
      rulesDir: '.eslintrc.json',
      extensions: ['js']
    },
    'ember-bootstrap': {
      // https://www.ember-bootstrap.com/#/getting-started/setup
      'bootstrapVersion': 3,
      // Include the Glyphicons font
      // Only applicable for Bootstrap 3
      // True if Bootstrap 3
      'importBootstrapFont': true,
      // Include the default static bootstrap.css
      // Only applicable when not using a preprocessor
      // True if no preprocessor
      // Set to false since using sass
      'importBootstrapCSS': false
    }
  })
  return app.toTree()
}
