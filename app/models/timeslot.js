import DS from 'ember-data'
import EmberObject, { computed } from '@ember/object'

export default DS.Model.extend({
  startTime: DS.attr('string'),
  endTime: DS.attr('string'),
  roomName: DS.attr('string'),
  user: DS.belongsTo('user'),
  event_id: DS.attr('number'),
  displayTime: computed('startTime', 'endTime', function () {
    const startTime = this.get('startTime')
    const endTime = this.get('endTime')
    return `${startTime} to ${endTime}`
  })
})
