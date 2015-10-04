`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'message-input', 'Integration | Component | message input', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{message-input}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#message-input}}
      template block text
    {{/message-input}}
  """

  assert.equal @$().text().trim(), 'template block text'
