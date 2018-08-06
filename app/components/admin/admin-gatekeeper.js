import { alias } from '@ember/object/computed'
import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  auth: service(),
  isAuthenticated: alias('auth.isAuthenticated'),
  isAdmin: alias('auth.isAdmin'),
  actions: {
    updateEventName (name) {
      console.log('updateEventName called on admin-panel.js.js')
      console.log('name admin-panel.js is: ', name)
      return this.sendAction('updateEventName', name)
    },
    cancel () {
      return this.sendAction('cancel')
    }
  }
})
