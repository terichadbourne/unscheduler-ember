import Component from '@ember/component'

export default Component.extend({
  tagName: 'li',
  editing: false,
  actions: {
    deleteDiscussion () {
      return this.sendAction('deleteDiscussion', this.get('discussion'))
    },
    updateDiscussion (discussion) {
      console.log('updateDiscussion called on discussion.js')
      console.log('item in item.js is: ', discussion)
      this.toggleProperty('editing')
      return this.sendAction('updateDiscussion', discussion)
    },
    toggleEditing () {
      console.log('current state of editing is: ', this.get('editing'))
      this.toggleProperty('editing')
    }
  }
})
