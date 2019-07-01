const eqArrays = require('./eqArrays.js');
const assertArraysEqual = function(actual, expected) {
  console.log('something', actual, expected);
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed:  ${actual}  ===  ${expected}`);
  } else {
    console.log(`Assertion Failed:  ${actual}  !==  ${expected}`);
  }
}
let findKeyByValue = function(obj, arr1) {


  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
    if (value === arr1) {
      return key;
    }
  }
}
let bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
}

assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);