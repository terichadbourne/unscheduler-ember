import Component from '@ember/component'

export default Component.extend({
  tagName: 'li',
  actions: {
    updateTimeslot () {
      console.log('clicked to update timeslot and this.get(timeslot.roomName) is ', this.get('timeslot.roomName'))
      return this.sendAction('updateTimeslot', this.get('timeslot'))
    }
  }
})
