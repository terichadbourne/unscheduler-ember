import DS from 'ember-data'

export default DS.Model.extend({
  title: DS.attr('string'),
  winner: DS.attr('boolean'),
  editable: DS.attr('boolean')
})
