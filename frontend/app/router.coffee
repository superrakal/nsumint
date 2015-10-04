`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend()

Router.map ()->
  @route 'root', path: '/'
  @route 'my_settings'
  @route 'user_settings'
  @route 'searching'
  @route 'chat'

`export default Router`
