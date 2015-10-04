`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'nickname-input', 'Integration | Component | nickname input', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{nickname-input}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#nickname-input}}
      template block text
    {{/nickname-input}}
  """

  assert.equal @$().text().trim(), 'template block text'
