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
      console.log('updateDiscussion called on my-application.js')
      console.log('discussion in my-application is is: ', discussion)
      console.log('discussion title in my-application is ', discussion.get('title'))
      return this.sendAction('updateDiscussion', discussion)
    }
  }
})
