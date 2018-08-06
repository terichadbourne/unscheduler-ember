import Application from '@ember/application'
import { run } from '@ember/runloop'
import TextFieldInitializer from 'unscheduler-ember/initializers/text-field'
import { module, test } from 'qunit'

let application

module('Unit | Initializer | text field', {
  beforeEach () {
    run(function () {
      application = Application.create()
      application.deferReadiness()
    })
  }
})

// Replace this with your real tests.
test('it works', function (assert) {
  TextFieldInitializer.initialize(application)

  // you would normally confirm the results of the initializer here
  assert.ok(true)
})
