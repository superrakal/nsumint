import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';
var UserSerializer;

UserSerializer = ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    user_faculties: {
      embedded: 'always'
    }
  }
});

export default UserSerializer;