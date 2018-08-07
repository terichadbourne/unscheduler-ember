import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  flashMessages: service(),
  model () {
    return this.get('store').findRecord('event', 1)
  },
  actions: {
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
        eventRecord.set('max_votes', votes)
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
        if (newStage === 'proposals_open') {
          eventRecord.set('voting_open', false)
          eventRecord.set('schedule_finalized', false)
          eventRecord.set('proposals_open', true)
        } else if (newStage === 'voting_open') {
          eventRecord.set('schedule_finalized', false)
          eventRecord.set('proposals_open', false)
          eventRecord.set('voting_open', true)
        } else if (newStage === 'schedule_finalized') {
          eventRecord.set('proposals_open', false)
          eventRecord.set('voting_open', false)
          eventRecord.set('schedule_finalized', true)
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
