`import DS from 'ember-data'`

Sticker = DS.Model.extend
  image:      DS.attr 'string'
  url:        DS.attr 'string'
`export default Sticker`
