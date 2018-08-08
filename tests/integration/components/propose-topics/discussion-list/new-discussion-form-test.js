import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('propose-topics/discussion-list/new-discussion-form', 'Integration | Component | propose topics/discussion list/new discussion form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{propose-topics/discussion-list/new-discussion-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#propose-topics/discussion-list/new-discussion-form}}
      template block text
    {{/propose-topics/discussion-list/new-discussion-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
