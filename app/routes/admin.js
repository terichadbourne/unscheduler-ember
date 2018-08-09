import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  flashMessages: service(),
  model () {
    return this.get('store').findRecord('event', 1)
    // return RSVP.hash({
    //   event: this.get('store').findRecord('event', 1),
    //   discussions: this.get('store').findAll('discussion'),
    //   timeslots: this.get('store').findAll('timeslot'),
    //   newDiscussion: {}
    // })
  },
  actions: {
    createTimeslot (timeslotPojo) {
      console.log('in createTimeslot in admin.js and timeslotPojo is: ', timeslotPojo)
      console.log('this.get(model) is: ', this.get('model'))
      const emberTimeslot = this.get('store').createRecord('timeslot', timeslotPojo)
      console.log('admin.js emberTimeslot is', emberTimeslot)
      console.log('admin.js emberTimeslot.get(event) is ', emberTimeslot.get('event'))
      emberTimeslot.set('event', this.get('store').findRecord('event', 1))
      console.log('admin.js emberTimeslot.get(event) is ', emberTimeslot.get('event'))
      return emberTimeslot.save()
      .then(() => {
        this.get('flashMessages').success('New timeslot saved.')
      })
      // .then(() => this.refresh())
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem saving that timeslot. Please try again.')
      })
    },
    updateEventName (name) {
      console.log('event name in admin.js is ', name)
      this.get('store').findRecord('event', 1).then(eventRecord => {
        eventRecord.set('name', name)
        eventRecord.save()
      })
      .then(() => this.refresh())
      .then(() => {
        this.get('flashMessages')
          .success('The event name has been updated.')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem updating the event name. Please try again.')
      })
    },
    updateMaxVotes (votes) {
      console.log('votes in admin.js is ', votes)
      this.get('store').findRecord('event', 1).then(eventRecord => {
        eventRecord.set('maxVotes', votes)
        eventRecord.save()
      })
      .then(() => this.refresh())
      .then(() => {
        this.get('flashMessages')
          .success("Your attendees' allowed vote count has been updated.")
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem updating the vote count. Please try again.')
      })
    },
    setEventStage (newStage) {
      console.log('setEventStage called on admin.js')
      console.log('newStage in admin.js is: ', newStage)
      this.get('store').findRecord('event', 1).then(eventRecord => {
        if (newStage === 'proposalsOpen') {
          eventRecord.set('votingOpen', false)
          eventRecord.set('scheduleFinalized', false)
          eventRecord.set('proposalsOpen', true)
        } else if (newStage === 'votingOpen') {
          eventRecord.set('scheduleFinalized', false)
          eventRecord.set('proposalsOpen', false)
          eventRecord.set('votingOpen', true)
        } else if (newStage === 'scheduleFinalized') {
          eventRecord.set('proposalsOpen', false)
          eventRecord.set('votingOpen', false)
          eventRecord.set('scheduleFinalized', true)
        }
        eventRecord.save()
        .then(() => {
          this.get('flashMessages')
            .success('Event stage has been updated.')
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem updating the event stage. Please try again.')
        })
      })
    }
  }
})
