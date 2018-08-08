import Component from '@ember/component'

export default Component.extend({
  actions: {
    updateDiscussion (discussion) {
      console.log('updateDiscussion called on  propose-topics.js')
      console.log('discussion in propose-topics is is: ', discussion)
      console.log('discussion title in  propose-topics is ', discussion.get('title'))
      return this.sendAction('updateDiscussion', discussion)
    }
  }
})
