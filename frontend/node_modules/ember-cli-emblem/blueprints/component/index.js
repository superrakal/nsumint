module.exports = {
  description: 'Generates a component. Name must contain a hyphen.',
  locals: function(options) {
    return this.lookupBlueprint('component').locals(options);
  },
  fileMapTokens: function() {
    return this.lookupBlueprint('component').fileMapTokens();
  }
};
