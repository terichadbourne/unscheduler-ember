import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  auth: service(),
  flashMessages: service(),
  model () {
    // return this.get('store').findRecord('event', 1)
    return RSVP.hash({
      event: this.get('store').findRecord('event', 1),
      discussions: this.get('store').findAll('discussion'),
      timeslots: this.get('store').findAll('timeslot')
      // votes: this.get('store').findAll('vote')
      // sessions: this.get('store').findAll('session')
    })
  },
  actions: {
    updateDiscussion (discussion) {
      console.log('discussion title in application.js is ', discussion.get('title'))
      discussion.save()
      .then(() => {
        this.get('flashMessages').success('Discussion proposal updated.')
      })
      .then(() => this.refresh())
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem saving that update. Please try again.')
      })
    },
    deleteDiscussion (discussion) {
      discussion.destroyRecord()
      .then(() => {
        this.get('flashMessages').success('Proposal deleted.')
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem deleting that proposal. Please try again.')
      })
    },
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
