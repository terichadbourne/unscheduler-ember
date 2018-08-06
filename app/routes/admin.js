import Route from '@ember/routing/route'

export default Route.extend({
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
    },
    updateMaxVotes (votes) {
      console.log('votes in admin.js is ', votes)
      this.get('store').findRecord('event', 1).then(eventRecord => {
        eventRecord.set('max_votes', votes)
        eventRecord.save()
      })
      .then(() => this.refresh())
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
      })
      // const stageButtons = document.getElementsByClassName('stage-button')
      // stageButtons.classList.remove('selected')
      // const selectedButton = document.getElementById(newStage)
      // selectedButton.classList.add('selected')
    }
  }
})
