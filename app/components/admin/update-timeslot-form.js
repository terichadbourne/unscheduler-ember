import Component from '@ember/component'

export default Component.extend({
  tagName: 'li',
  actions: {
    updateTimeslot () {
      return this.sendAction('updateTimeslot', this.get('timeslot'))
    }
  }
})
