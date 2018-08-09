import DS from 'ember-data'
import EmberObject, { computed } from '@ember/object'

export default DS.Model.extend({
  name: DS.attr('string'),
  proposalsOpen: DS.attr('boolean'),
  votingOpen: DS.attr('boolean'),
  scheduleFinalized: DS.attr('boolean'),
  maxVotes: DS.attr('number'),
  timeslots: DS.hasMany('timeslot'),
  roomNames: computed('timeslots', function () {
    const timeslots = this.get('timeslots')
    const roomsArray = []
    timeslots.forEach((timeslot) => {
      if (roomsArray.includes(timeslot.get('roomName'))) {
      } else {
        roomsArray.push(timeslot.get('roomName'))
      }
    })
    return roomsArray
  }),
  startTimes: computed('timeslots', function () {
    const timeslots = this.get('timeslots')
    const startTimesArray = []
    timeslots.forEach((timeslot) => {
      if (startTimesArray.includes(timeslot.get('startTime'))) {
      } else {
        startTimesArray.push(timeslot.get('startTime'))
      }
    })
    return startTimesArray
  }),
  endTimes: computed('timeslots', function () {
    const timeslots = this.get('timeslots')
    const endTimesArray = []
    timeslots.forEach((timeslot) => {
      if (endTimesArray.includes(timeslot.get('endTime'))) {
      } else {
        endTimesArray.push(timeslot.get('endTime'))
      }
    })
    return endTimesArray
  }),
  displayTimes: computed('timeslots', function () {
    const timeslots = this.get('timeslots')
    const displayTimesArray = []
    timeslots.forEach((timeslot) => {
      if (displayTimesArray.includes(timeslot.get('displayTime'))) {
      } else {
        displayTimesArray.push(timeslot.get('displayTime'))
      }
    })
    return displayTimesArray
  })
  // user: DS.belongsTo('user')
})
