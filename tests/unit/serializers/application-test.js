import { moduleForModel, test } from 'ember-qunit'

moduleForModel('application', 'Unit | Serializer | application', {
  // Specify the other units that are required for this test.
  needs: ['serializer:application']
})

// Replace this with your real tests.
test('it serializes records', function (assert) {
  const record = this.subject()

  const serializedRecord = record.serialize()

  assert.ok(serializedRecord)
})
