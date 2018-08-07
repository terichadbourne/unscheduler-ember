import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('string'),
  proposalsOpen: DS.attr('boolean'),
  votingOpen: DS.attr('boolean'),
  scheduleFinalized: DS.attr('boolean'),
  maxVotes: DS.attr('number')
  // timeslots: DS.hasMany('timeslot'),
  // user: DS.belongsTo('user')
})
