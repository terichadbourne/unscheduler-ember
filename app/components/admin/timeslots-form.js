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
      // const updatedRoomsArray = []
      // this.get('timeslots.roomNames')
      // .then((roomNames) => {
      //   roomNames.forEach((timeslot) => {
      //   console.log('roomName is ', roomName)
      //   if (updatedRoomsArray.includes(roomName)) {
      //   } else {
      //     updatedRoomsArray.push(roomName)
      //   }
      // })
      // this.set('roomNames', updatedRoomsArray)
      this.toggleProperty('displayRoomNames')
      // console.log('updatedRoomsArray is', updatedRoomsArray)
      // console.log("this.get('roomNames') is ", this.get('roomNames'))
    },
    createTimeslots () {
      console.log('this.event.get(id) is ', this.event.get('id'))
      console.log('requestTimeslots called in timeslots-form.js')
      console.log("event in timeslots-form.js is: ", this.get('timeslotsRequest'))
      console.log("room qty in timeslots-form.js is: ", this.get('timeslotsRequest.roomsQty'))
      console.log("timeslot qty in timeslots-form.js is: ", this.get('timeslotsRequest.timeslotsQty'))
      const roomsQty = parseInt(this.get('timeslotsRequest.roomsQty'))
      const timesQty = parseInt(this.get('timeslotsRequest.timeslotsQty'))
      const totalTimeslots = roomsQty * timesQty
      const roomsArray = []
      const startTimesArray = []
      const endTimesArray = []
      const timesArray = []
      for (let i = 1; i < (roomsQty + 1); i++) {
        roomsArray.push(`Room ${i}`)
      }
      console.log('roomsArray is ', roomsArray)
      for (let i = 1; i < (timesQty + 1); i++) {
        startTimesArray.push(`Session ${i} Start`)
        endTimesArray.push(`Session ${i} End`)
        timesArray.push(`Session ${i} Start - Session ${i} End`)
      }
      console.log('startTimesArray is ', startTimesArray)
      console.log('endTimesArray is ', endTimesArray)
      console.log('timesArray is ', timesArray)
      console.log('totalTimeslots is ', totalTimeslots)
      const newTimeslots = []
      for (let r = 0; r < roomsArray.length; r++) {
        for (let t = 0; t < timesArray.length; t++) {
          const timeslotPojo = {event_id: 1}
          timeslotPojo.roomName = roomsArray[r]
          timeslotPojo.startTime = startTimesArray[t]
          timeslotPojo.endTime = endTimesArray[t]
          console.log(r, ' ', t, ' ', timeslotPojo)
          newTimeslots.push(timeslotPojo)
        }
      }
      console.log('newTimeslots is ', newTimeslots)
      this.sendAction('createTimeslots', newTimeslots)
      this.set('timeslotsRequest.roomsQty', '')
      this.set('timeslotsRequest.timeslotsQty', '')
    }
  }
})
