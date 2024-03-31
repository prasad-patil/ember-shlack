import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { dateToString } from 'shlack/utils/date';

module('Integration | Helper | format-timestamp', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('myDate', '04-05-2019');

    await render(hbs`{{format-timestamp myDate}}`);

    assert.equal(this.element.textContent.trim(), dateToString('04-05-2019'));
  });
});
