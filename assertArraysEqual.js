const eqArrays = function(arrA, arrB) {

  var longestLength;

  if (arrA.length > arrB.length) {
    longestLength = arrA.length;
  } else {
    longestLength = arrB.length;
  }

  for (var i = 0; i < longestLength; i++) {

    if (arrA[i] === arrB[i]) {

    } else {
      return false;
    }
  }

  return true;
}


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed:  ${actual}  ===  ${expected}`);
  } else {
    console.log(`Assertion Failed:  ${actual}  !==  ${expected}`);
  }
}
assertArraysEqual([1, 2, 3], [1, 2, 3]);
module.exports = assertArraysEqual;