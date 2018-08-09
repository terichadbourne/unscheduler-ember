import Component from '@ember/component'

export default Component.extend({
  tagName: 'li',
  editing: false,
  actions: {
    deleteDiscussion () {
      return this.sendAction('deleteDiscussion', this.get('discussion'))
    },
    updateDiscussion (discussion) {
      this.toggleProperty('editing')
      return this.sendAction('updateDiscussion', discussion)
    },
    deleteItem () {
      return this.sendAction('deleteDiscussion', this.get('discussion'))
    },
    toggleEditing () {
      this.toggleProperty('editing')
    }
  }
})
