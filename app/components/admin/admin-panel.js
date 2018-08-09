import Component from '@ember/component';

export default Component.extend({
  actions: {
    updateTimeslot (timeslot) {
      return this.sendAction('updateTimeslot', timeslot)
    },
    updateEventName (name) {
      return this.sendAction('updateEventName', name)
    },
    updateMaxVotes (votes) {
      return this.sendAction('updateMaxVotes', votes)
    },
    setEventStage (stage) {
      return this.sendAction('setEventStage', stage)
    },
    createTimeslots (newTimeslots) {
      return this.sendAction('createTimeslots', newTimeslots)
    },
    deleteAllTimeslots () {
      return this.sendAction('deleteAllTimeslots')
    }
  }
})
