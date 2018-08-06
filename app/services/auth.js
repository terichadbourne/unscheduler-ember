import { bool } from '@ember/object/computed'
import { storageFor } from 'ember-local-storage'
import Service, { inject as service } from '@ember/service'

export default Service.extend({
  ajax: service(),
  credentials: storageFor('auth'),
  isAuthenticated: bool('credentials.token'),

  signUp (credentials) {
    return this.get('ajax').post('/sign-up', {
      data: {
        credentials: {
          email: credentials.email,
          password: credentials.password,
          password_confirmation: credentials.passwordConfirmation
        }
      }
    })
  },

  signIn (credentials) {
    return this.get('ajax').post('/sign-in', {
      data: {
        credentials: {
          email: credentials.email,
          password: credentials.password
        }
      }
    })
    .then((result) => {
      this.get('credentials').set('id', result.user.id)
      this.get('credentials').set('email', result.user.email)
      this.get('credentials').set('token', result.user.token)
    })
  },

  changePassword (passwords) {
    return this.get('ajax').patch(`/change-password`, {
      data: {
        passwords: {
          old: passwords.previous,
          new: passwords.next
        }
      }
    })
  },

  signOut () {
    return this.get('ajax').del(`/sign-out`)
    .finally(() => this.get('credentials').reset())
  }
})
