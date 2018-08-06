import Component from '@ember/component';

export default Component.extend({
  actions: {
    updateEventName (name) {
      console.log('updateEventName called on admin-panel.js.js')
      console.log('name admin-panel.js is: ', name)
      return this.sendAction('updateEventName', name)
    },
    cancel () {
      return this.sendAction('cancel')
    }
  }
})
