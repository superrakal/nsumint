`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'chatbox-component', 'Integration | Component | chatbox component', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{chatbox-component}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#chatbox-component}}
      template block text
    {{/chatbox-component}}
  """

  assert.equal @$().text().trim(), 'template block text'
