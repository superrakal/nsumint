`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'select-all', 'Integration | Component | select all', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{select-all}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#select-all}}
      template block text
    {{/select-all}}
  """

  assert.equal @$().text().trim(), 'template block text'
