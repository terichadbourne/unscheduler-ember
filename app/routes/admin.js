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
    }
  }
})
