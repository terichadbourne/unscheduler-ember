import Component from '@ember/component'

export default Component.extend({
  actions: {
    updateMaxVotes () {
      console.log('updateEventName called in max-votes-form.js')
      console.log("event in max-votes-form is: ", event)
      console.log("this.event.get('maxVotes') in max-votes-form is: ", this.event.get('maxVotes'))
      return this.sendAction('updateMaxVotes', this.event.get('maxVotes'))
    }
  }
})
