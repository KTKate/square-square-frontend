import { moduleForModel, test } from 'ember-qunit';

moduleForModel('square', 'Unit | Model | square', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
