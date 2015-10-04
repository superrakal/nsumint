import Ember from 'ember';
var SelectAllComponent;

SelectAllComponent = Ember.Component.extend({
  actions: {
    selectAll: function selectAll() {
      return $('.faculty button.inactive').click();
    }
  }
});

export default SelectAllComponent;