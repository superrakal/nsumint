`import DS from 'ember-data'`
`import { ActiveModelSerializer } from 'active-model-adapter'`

UserSerializer = ActiveModelSerializer.extend DS.EmbeddedRecordsMixin,
  attrs:
    user_faculties: { embedded: 'always'}

`export default UserSerializer`
