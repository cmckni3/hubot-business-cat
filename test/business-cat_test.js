const chai  = require('chai');
const sinon = require('sinon');
chai.use(require('sinon-chai'));

const { expect } = chai;

describe('business-cat', () => {
  robot = { hear: sinon.spy() };

  beforeEach(() => {
    const t = require('../src/business-cat')(robot);
  });

  it('registers a hear listener', () => {
    expect(robot.hear).to.have.been.calledWith(/business cat me/i);
  });
});
