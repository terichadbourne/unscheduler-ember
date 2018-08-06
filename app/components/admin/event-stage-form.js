import Component from '@ember/component'

export default Component.extend({
  actions: {
    setEventStage () {
      console.log('this in setEventStage is: ', this)
      // console.log('target in setEventStage is: ', target)
      console.log('event.target in setEventStage is: ', event.target)
      console.log('event.target.id in setEventStage is: ', event.target.id)
      // console.log("this.event.get('max_votes') in max-votes-form is: ", this.event.get('max_votes'))
      return this.sendAction('setEventStage', event.target.id)
    }
  }
})
