import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'
import { alias } from '@ember/object/computed'

export default Route.extend({
  flashMessages: service(),
  auth: service(),
  user: alias('auth.credentials.email'),
  admin: alias('auth.credentials.Admin'),
  isAuthenticated: alias('auth.isAuthenticated'),
  isAdmin: alias('auth.isAdmin'),
  model () {
    // return this.get('store').findRecord('event', 1)
    return RSVP.hash({
      event: this.get('store').findRecord('event', 1),
      discussions: this.get('store').findAll('discussion'),
      timeslots: this.get('store').findAll('timeslot'),
      newDiscussion: {}
    })
  },
  actions: {
    updateDiscussion (discussion) {
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
      .then(() => this.refresh())
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem deleting that proposal. Please try again.')
      })
    },
    createDiscussion (discussionPojo) {
      const emberDiscussion = this.get('store').createRecord('discussion', discussionPojo)
      return emberDiscussion.save()
      .then(() => {
        this.get('flashMessages').success('Discussion proposal saved.')
      })
      .then(() => this.refresh())
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem saving that proposal. Please try again.')
      })
    }
  }
})
