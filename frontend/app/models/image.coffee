`import DS from 'ember-data'`

Image = DS.Model.extend
  image:      DS.attr 'string'
  url:        DS.attr 'string'
`export default Image`
