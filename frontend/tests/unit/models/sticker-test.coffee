`import { moduleForModel, test } from 'ember-qunit'`

moduleForModel 'sticker', 'Unit | Model | sticker', {
  # Specify the other units that are required for this test.
  needs: []
}

test 'it exists', (assert) ->
  model = @subject()
  # store = @store()
  assert.ok !!model
