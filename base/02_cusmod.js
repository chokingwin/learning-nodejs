console.log('this is a module');

const testVar = 100;

function test(params) {
  console.log(testVar);
}

module.exports.testVar = testVar;
module.exports.testFn = test;
