import DS from 'ember-data'

export default DS.Model.extend({
  startTime: DS.attr('string'),
  endTime: DS.attr('string'),
  roomName: DS.attr('string'),
  user: DS.belongsTo('user'),
  event: DS.belongsTo('event')
})
