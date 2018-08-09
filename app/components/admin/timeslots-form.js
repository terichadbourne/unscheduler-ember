import Component from '@ember/component'

export default Component.extend({
  timeslotsRequest: {},
  roomNames: [],
  displayRoomNames: false,
  // newTimeslots: [],
  actions: {
    updateTimeslot (timeslot) {
      return this.sendAction('updateTimeslot', timeslot)
    },
    deleteAllTimeslots () {
      return this.sendAction('deleteAllTimeslots')
    },
    toggleRoomNames () {
      this.toggleProperty('displayRoomNames')
    },
    createTimeslots () {
      const roomsQty = parseInt(this.get('timeslotsRequest.roomsQty'))
      const timesQty = parseInt(this.get('timeslotsRequest.timeslotsQty'))
      const roomsArray = []
      const startTimesArray = []
      const endTimesArray = []
      const timesArray = []
      for (let i = 1; i < (roomsQty + 1); i++) {
        roomsArray.push(`Room ${i}`)
      }
      for (let i = 1; i < (timesQty + 1); i++) {
        startTimesArray.push(`Session ${i} Start`)
        endTimesArray.push(`Session ${i} End`)
        timesArray.push(`Session ${i} Start - Session ${i} End`)
      }
      const newTimeslots = []
      for (let r = 0; r < roomsArray.length; r++) {
        for (let t = 0; t < timesArray.length; t++) {
          const timeslotPojo = {event_id: 1}
          timeslotPojo.roomName = roomsArray[r]
          timeslotPojo.startTime = startTimesArray[t]
          timeslotPojo.endTime = endTimesArray[t]
          newTimeslots.push(timeslotPojo)
        }
      }
      this.sendAction('createTimeslots', newTimeslots)
      this.set('timeslotsRequest.roomsQty', '')
      this.set('timeslotsRequest.timeslotsQty', '')
    }
  }
})
