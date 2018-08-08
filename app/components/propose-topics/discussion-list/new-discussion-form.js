import Component from '@ember/component'

export default Component.extend({
  actions: {
    createDiscussion () {
      console.log('discussion-list.js createDiscussion this.discussion is ', this.discussion)
      this.sendAction('createDiscussion', this.discussion)
    }
  }
})
