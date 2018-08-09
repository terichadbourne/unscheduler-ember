import Component from '@ember/component'

export default Component.extend({
  actions: {
    updateDiscussion (discussion) {
      return this.sendAction('updateDiscussion', discussion)
    },
    deleteDiscussion (discussion) {
      return this.sendAction('deleteDiscussion', discussion)
    },
    createDiscussion (discussion) {
      return this.sendAction('createDiscussion', discussion)
    }
  }
})
