import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin/new-timeslots-display', 'Integration | Component | admin/new timeslots display', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin/new-timeslots-display}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin/new-timeslots-display}}
      template block text
    {{/admin/new-timeslots-display}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
