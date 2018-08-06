import Component from '@ember/component'

export default Component.extend({
  actions: {
    updateEventName () {
      console.log('updateEventName called in event-name-form.js')
      console.log("event in event-name-form is: ", event)
      console.log("this.event.get('name') in event-name-form is: ", this.event.get('name'))
      return this.sendAction('updateEventName', this.event.get('name'))
    },
    cancel () {
      return this.sendAction('cancel')
    }
  }
})
