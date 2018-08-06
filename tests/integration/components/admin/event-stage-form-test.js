import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin/event-stage-form', 'Integration | Component | admin/event stage form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin/event-stage-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin/event-stage-form}}
      template block text
    {{/admin/event-stage-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
