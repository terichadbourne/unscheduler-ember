import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  auth: service(),
  flashMessages: service(),

  actions: {
    signOut () {
      this.get('auth').signOut()
        .then(() => this.get('store').unloadAll())
        .then(() => this.transitionTo('sign-in'))
        .then(() => {
          this.get('flashMessages').warning('You have been signed out.')
        })
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Are you sure you\'re signed-in?')
        })
    },

    error (reason) {
      console.error(reason)

      const unauthorized = reason.errors && reason.errors.some((error) =>
        error.status === '401'
      )

      if (unauthorized) {
        this.get('flashMessages')
          .danger('You must be authenticated to access this page.')
        this.transitionTo('/sign-in')
      } else {
        this.get('flashMessages')
          .danger('There was a problem. Please try again.')
      }

      return false
    }
  }
})
