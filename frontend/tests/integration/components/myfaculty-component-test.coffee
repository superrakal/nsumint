`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'myfaculty-component', 'Integration | Component | myfaculty component', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{myfaculty-component}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#myfaculty-component}}
      template block text
    {{/myfaculty-component}}
  """

  assert.equal @$().text().trim(), 'template block text'
