import DS from 'ember-data';
var Faculty;

Faculty = DS.Model.extend({
  name: DS.attr('string')
});

export default Faculty;