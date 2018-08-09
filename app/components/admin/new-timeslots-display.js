import Component from '@ember/component'

export default Component.extend({
  actions: {
    updateTimeslot (timeslot) {
      return this.sendAction('updateTimeslot', timeslot)
    }
  }
})
