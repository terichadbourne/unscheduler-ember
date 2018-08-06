import resolver from './helpers/resolver'
import './helpers/flash-message'
import { setResolver } from '@ember/test-helpers'
import { start } from 'ember-cli-qunit'

setResolver(resolver)
start()
