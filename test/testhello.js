const assert = require('chai').assert
const hello = require('../hello')

describe('hello', function(){
    it('app should be return hello', function(){
        assert.equal(hello(), 'hello')
    })
})