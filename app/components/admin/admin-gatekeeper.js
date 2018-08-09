import { alias } from '@ember/object/computed'
import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  auth: service(),
  isAuthenticated: alias('auth.isAuthenticated'),
  isAdmin: alias('auth.isAdmin'),
  actions: {
    createTimeslot (timeslotPojo) {
      return this.sendAction('createTimeslot', timeslotPojo)
    },
    updateEventName (name) {
      console.log('updateEventName called on admin-gatekeeper.js')
      console.log('nam in admin-gatekeeper.js is: ', name)
      return this.sendAction('updateEventName', name)
    },
    updateMaxVotes (votes) {
      console.log('updateMaxVotes called on admin-gatekeeper.js')
      console.log('votes in admin-gatekeeper.js is: ', votes)
      return this.sendAction('updateMaxVotes', votes)
    },
    setEventStage (stage) {
      console.log('setEventStage called on admin-gatekeeper.js')
      console.log('stage in admin-gatekeeper.js is: ', stage)
      return this.sendAction('setEventStage', stage)
    }
  }
})
