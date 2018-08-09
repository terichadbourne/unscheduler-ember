import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin/timeslots-form', 'Integration | Component | admin/timeslots form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin/timeslots-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin/timeslots-form}}
      template block text
    {{/admin/timeslots-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
