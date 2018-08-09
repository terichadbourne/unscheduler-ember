import Component from '@ember/component'

export default Component.extend({
  actions: {
    updateEventName () {
      return this.sendAction('updateEventName', this.event.get('name'))
    }
  }
})
