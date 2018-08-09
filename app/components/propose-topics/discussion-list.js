import Component from '@ember/component'

export default Component.extend({
  tagName: 'ul',
  actions: {
    updateDiscussion (discussion) {
      return this.sendAction('updateDiscussion', discussion)
    },
    deleteDiscussion (discussion) {
      return this.sendAction('deleteDiscussion', discussion)
    },
    createDiscussion (discussion) {
      this.sendAction('createDiscussion', discussion)
    }
  }
})
