import Component from '@ember/component'

export default Component.extend({
  timeslotsRequest: {},
  newTimeslots: [],
  actions: {
    requestTimeslots () {
      console.log('this.event.get(id) is ', this.event.get('id'))
      console.log('requestTimeslots called in timeslots-form.js')
      console.log("event in timeslots-form.js is: ", this.timeslotsRequest)
      console.log("room qty in timeslots-form.js is: ", this.timeslotsRequest.roomsQty)
      console.log("timeslot qty in timeslots-form.js is: ", this.timeslotsRequest.timeslotsQty)
      const roomsQty = parseInt(this.timeslotsRequest.roomsQty)
      const timesQty = parseInt(this.timeslotsRequest.timeslotsQty)
      this.timeslotsRequest.totalTimeslots = roomsQty * timesQty
      this.timeslotsRequest.roomsArray = []
      this.timeslotsRequest.startTimesArray = []
      this.timeslotsRequest.endTimesArray = []
      this.timeslotsRequest.timesArray = []
      for (let i = 1; i < (roomsQty + 1); i++) {
        this.timeslotsRequest.roomsArray.push(`Room ${i}`)
      }
      console.log('this.timeslotsRequest.roomsArray is ', this.timeslotsRequest.roomsArray)
      for (let i = 1; i < (timesQty + 1); i++) {
        this.timeslotsRequest.startTimesArray.push(`Session ${i} End`)
        this.timeslotsRequest.endTimesArray.push(`Session ${i} End`)
        this.timeslotsRequest.timesArray.push(`Session ${i}`)
      }
      console.log('startTimesArray is ', this.timeslotsRequest.startTimesArray)
      console.log('endTimesArray is ', this.timeslotsRequest.endTimesArray)
      console.log('endTimesArray is ', this.timeslotsRequest.timesArray)
      console.log('this.totalTimeslots is ', this.timeslotsRequest.totalTimeslots)
      console.log('this.totalTimeslots object is: ', this.timeslotsRequest)
      for (let r = 0; r < this.timeslotsRequest.roomsArray.length; r++) {
        for (let t = 0; t < this.timeslotsRequest.timesArray.length; t++) {
          const timeslotPojo = {}
          timeslotPojo.roomName = this.timeslotsRequest.roomsArray[r]
          timeslotPojo.startTime = this.timeslotsRequest.startTimesArray[t]
          timeslotPojo.endTime = this.timeslotsRequest.endTimesArray[t]
          console.log(r, ' ', t, ' ', timeslotPojo)
          this.newTimeslots.push(timeslotPojo)
          this.sendAction('createTimeslot', timeslotPojo)
          // this.get('store').createRecord('timeslot', {timeslotPojo})
        }
      }
      console.log('this.newTimeslots is ', this.newTimeslots)
    }
  }
})
