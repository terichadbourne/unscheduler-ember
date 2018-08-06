import Component from '@ember/component';

export default Component.extend({
  actions: {
    updateEventName (name) {
      console.log('updateEventName called on admin-panel.js.js')
      console.log('name admin-panel.js is: ', name)
      return this.sendAction('updateEventName', name)
    },
    updateMaxVotes (votes) {
      console.log('updateMaxVotes called on admin-panel.js')
      console.log('votes in admin-panel.js is: ', votes)
      return this.sendAction('updateMaxVotes', votes)
    },
    setEventStage (stage) {
      console.log('setEventStage called on admin-panel.js')
      console.log('stage in admin-panel.js is: ', stage)
      return this.sendAction('setEventStage', stage)
    }
  }
})
