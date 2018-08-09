import Component from '@ember/component'

export default Component.extend({
  actions: {
    setEventStage () {
      return this.sendAction('setEventStage', event.target.id)
    }
  }
})
