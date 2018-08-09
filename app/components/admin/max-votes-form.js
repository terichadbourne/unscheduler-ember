import Component from '@ember/component'

export default Component.extend({
  actions: {
    updateMaxVotes () {
      return this.sendAction('updateMaxVotes', this.event.get('maxVotes'))
    }
  }
})
