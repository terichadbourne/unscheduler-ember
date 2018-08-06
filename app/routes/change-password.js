import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  auth: service(),
  flashMessages: service(),

  model () {
    return {}
  },

  actions: {
    changePassword (passwords) {
      if (passwords.next === passwords.confirmNext) {
        this.get('auth').changePassword(passwords)
        .then(() => this.get('auth').signOut())
        .then(() => this.transitionTo('sign-in'))
        .then(() => {
          this.get('flashMessages')
          .success('Successfully changed your password!')
        })
        .then(() => {
          this.get('flashMessages').warning('You have been signed out.')
        })
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Please try again.')
        })
      } else {
        this.get('flashMessages')
        .danger('Your new passwords must match.')
      }
    }
  }
})
