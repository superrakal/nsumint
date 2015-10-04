`import DS from 'ember-data'`

User = DS.Model.extend
  my_sex:         DS.attr 'string'
  user_sex:       DS.attr 'string'
  status:         DS.attr 'string', {defaultValue: 'created'}
  socket_id:      DS.attr 'string'
  user_socket_id: DS.attr 'string'
  nickname:       DS.attr 'string'
  my_faculty:     DS.belongsTo 'faculty'
  user_faculties: DS.hasMany   'faculty', {async: true}

`export default User`
