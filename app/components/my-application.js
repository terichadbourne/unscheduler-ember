import { alias } from '@ember/object/computed'
import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  auth: service(),
  user: alias('auth.credentials.email'),
  admin: alias('auth.credentials.Admin'),
  isAuthenticated: alias('auth.isAuthenticated'),
  isAdmin: alias('auth.isAdmin'),
  actions: {
    signOut () {
      this.sendAction('signOut')
    },
    updateDiscussion (discussion) {
      return this.sendAction('updateDiscussion', discussion)
    },
    deleteDiscussion (discussion) {
      return this.sendAction('deleteDiscussion', discussion)
    },
    createDiscussion (discussion) {
      return this.sendAction('createDiscussion', discussion)
    }
  }
})
