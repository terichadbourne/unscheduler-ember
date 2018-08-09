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
      console.log('timeslot.roomName is ', timeslot.get('roomName'))
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
      console.log('timeslot.startTime is ', timeslot.get('startTime'))
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
      console.log('timeslot.endTime is ', timeslot.get('endTime'))
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
      console.log('timeslot.displayTime is ', timeslot.get('displayTime'))
      if (displayTimesArray.includes(timeslot.get('displayTime'))) {
      } else {
        displayTimesArray.push(timeslot.get('displayTime'))
      }
    })
    return displayTimesArray
  })
  // user: DS.belongsTo('user')
})
