const expect = require('chai').expect;

describe('sense-check',function() {
  it('Should run npm', function() {
    expect(true).to.be.true;
    expect(false).to.be.false;
   })
})

describe('An asynchronous test', function() {
  const asyncFunction = require('../blub.js').asyncFunction;
  let valueUnderTest;
  it('should wait 3 seconds', function() {
    const blub = () => {
      return 5;
    }
    async function flub () {
      const output = await asyncFunction(blub);
      return output;
    } 
    (async function() {valueUnderTest = await flub()})();
    console.log(valueUnderTest);
    expect(valueUnderTest).to.equal(5);
  })
})

// 7:53 into the online tutorial presents the code Guil wrote in the TEST file:

// function saveGame(callback) {
//   setTimeout(function() {
//     callback();
//   },1000);
// }
describe('SaveGame', function() {
  it('should update save status', function(done) {
    let status = 'game not saved...';
    const saveGame = require('../blub.js').saveGame; // added
    saveGame(function() {
      status = 'game saved!';
      expect(status).to.equal('game saved!');
      done();
    });
  });
});


//











