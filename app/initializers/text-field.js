import TextField from '@ember/component/text-field'

export function initialize () {
  TextField.reopen({
    classNames: ['form-control']
  })
}

export default {
  name: 'text-field',
  initialize
}
