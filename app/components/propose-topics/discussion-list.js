import Component from '@ember/component'

export default Component.extend({
  tagName: 'ul',
  actions: {
    updateDiscussion (discussion) {
      console.log('updateDiscussion called on discussion-list.js')
      console.log('discussion in discussion-list is is: ', discussion)
      console.log('discussion title in discussion-list is ', discussion.get('title'))
      return this.sendAction('updateDiscussion', discussion)
    }
  }
})
