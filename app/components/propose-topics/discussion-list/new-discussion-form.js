import Component from '@ember/component'

export default Component.extend({
  actions: {
    createDiscussion () {
      this.sendAction('createDiscussion', this.discussion)
    }
  }
})
