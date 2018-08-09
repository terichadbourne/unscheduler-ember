import Component from '@ember/component'

export default Component.extend({
  actions: {
    updateDiscussion () {
      return this.sendAction('updateDiscussion', this.get('discussion'))
    },
    cancel () {
      return this.sendAction('cancel')
    }
  }
})
