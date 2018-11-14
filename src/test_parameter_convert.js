import test from 'ava'
import * as convert from './parameter_convert.js'

test('int converter', t => {
  let converted = convert.to.int('foo')
  t.is(converted, 'foo')
})
