import DS from 'ember-data';
var Image;

Image = DS.Model.extend({
  image: DS.attr('string'),
  url: DS.attr('string')
});

export default Image;