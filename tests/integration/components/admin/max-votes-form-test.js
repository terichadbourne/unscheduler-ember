import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin/max-votes-form', 'Integration | Component | admin/max votes form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin/max-votes-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin/max-votes-form}}
      template block text
    {{/admin/max-votes-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
