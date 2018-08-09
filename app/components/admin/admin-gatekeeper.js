import { alias } from '@ember/object/computed'
import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  auth: service(),
  isAuthenticated: alias('auth.isAuthenticated'),
  isAdmin: alias('auth.isAdmin'),
  actions: {
    updateTimeslot (timeslot) {
      return this.sendAction('updateTimeslot', timeslot)
    },
    createTimeslots (newTimeslots) {
      return this.sendAction('createTimeslots', newTimeslots)
    },
    updateEventName (name) {
      return this.sendAction('updateEventName', name)
    },
    updateMaxVotes (votes) {
      return this.sendAction('updateMaxVotes', votes)
    },
    setEventStage (stage) {
      return this.sendAction('setEventStage', stage)
    },
    deleteAllTimeslots () {
      return this.sendAction('deleteAllTimeslots')
    }
  }
})
