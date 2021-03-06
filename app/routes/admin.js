import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
// import RSVP from 'rsvp'

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
    createTimeslots (newTimeslots) {
      newTimeslots.forEach((timeslotPojo) => {
        const emberTimeslot = this.get('store').createRecord('timeslot', timeslotPojo)
        return emberTimeslot.save()
        .then(() => {
          this.get('flashMessages').success('New timeslot saved.')
        })
        .then(() => this.refresh())
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem saving that timeslot. Please try again.')
        })
      })
    },
    updateTimeslot (timeslot) {
      timeslot.save()
      .then(() => this.refresh())
      .then(() => {
        this.get('flashMessages')
          .success('The timeslot been updated.')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem updating the timeslot. Please try again.')
      })
    },
    updateEventName (name) {
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
    },
    deleteAllTimeslots () {
      this.get('store').findAll('timeslot', { reload: true })
      .then(function (timeslots) {
        timeslots.forEach((timeslot) => {
          timeslot.destroyRecord()
        })
      })
      .then(() => {
        this.get('flashMessages')
          .success('Timeslots deleted.')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem resetting your timeslots. Please try again.')
      })
    }
  }
})
