import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin/admin-gatekeeper', 'Integration | Component | admin/admin gatekeeper', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin/admin-gatekeeper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin/admin-gatekeeper}}
      template block text
    {{/admin/admin-gatekeeper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
