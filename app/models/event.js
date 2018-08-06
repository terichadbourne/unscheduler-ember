import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('string'),
  proposals_open: DS.attr('boolean'),
  voting_open: DS.attr('boolean'),
  schedule_finalized: DS.attr('boolean'),
  max_votes: DS.attr('number')
  // user: DS.belongsTo('user')
})
