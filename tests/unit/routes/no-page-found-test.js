import { module, test } from 'qunit';
import { setupTest } from 'ember-js-tutotial/tests/helpers';

module('Unit | Route | no-page-found', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:no-page-found');
    assert.ok(route);
  });
});
