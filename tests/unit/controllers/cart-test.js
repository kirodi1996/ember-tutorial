import { module, test } from 'qunit';
import { setupTest } from 'ember-js-tutotial/tests/helpers';

module('Unit | Controller | cart', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:cart');
    assert.ok(controller);
  });
});
