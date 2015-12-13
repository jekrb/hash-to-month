var test = require('tape')
var toMonth = require('../')

test('is consistent', function (t) {
  t.same(toMonth('test, inc.'), toMonth('test, inc.'))
  t.same(toMonth('example, llc.'), toMonth('example, llc.'))
  t.end()
})
