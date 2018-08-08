import Component from '@ember/component'

export default Component.extend({
  actions: {
    updateDiscussion () {
      console.log('update item called in discussion-form.js')
      console.log("this.get('discussion')is: ", this.get('discussion'))
      return this.sendAction('updateDiscussion', this.get('discussion'))
    },
    cancel () {
      return this.sendAction('cancel')
    }
  }
})
