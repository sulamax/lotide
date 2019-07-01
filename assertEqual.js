// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
// if (actual === expected) {

//   console.log('Assertion Passed: ' + actual + ' === ' + expected);
// }

// if (actual !== expected) {
//   console.log('Assertion Failed: ' + actual + ' !== ' + expected);

// }
// };

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log(`Assertion Passed:  ${actual}  ===  ${expected}`);
    console.assert(actual === expected, {
      actual: actual,
      errorMsg: 'Assertion Failed'
    })
  }
  if (actual !== expected) {
    // console.log(`Assertion Failed:  ${actual}  !==  ${expected}`);

    console.assert(actual === expected, {
      actual: actual,
      errorMsg: 'Assertion Failed'
    })

  }
};
// TEST CODE



module.exports = assertEqual;