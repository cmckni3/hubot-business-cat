chai  = require 'chai'
sinon = require 'sinon'
chai.use require 'sinon-chai'

expect = chai.expect

describe 'business-cat', ->
  beforeEach ->
    @robot =
      hear: sinon.spy()

    require('../src/business-cat')(@robot)

  it 'registers a hear listener', ->
    expect(@robot.hear).to.have.been.calledWith(/business cat me/i)
