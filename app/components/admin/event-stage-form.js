import Component from '@ember/component'

export default Component.extend({
  actions: {
    setEventStage () {
      console.log('this in setEventStage is: ', this)
      // console.log('target in setEventStage is: ', target)
      console.log('event.target in setEventStage is: ', event.target)
      console.log('event.target.id in setEventStage is: ', event.target.id)
      // console.log("this.event.get('maxVotes') in max-votes-form is: ", this.event.get('maxVotes'))
      return this.sendAction('setEventStage', event.target.id)
    }
  }
})
