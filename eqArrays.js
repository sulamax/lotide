const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  ${actual}  ===  ${expected}`);
  }
  if (actual !== expected) {
    console.log(`Assertion Failed:  ${actual}  !==  ${expected}`);
  }

};

const eqArrays = function(arrA, arrB) {

  var longestLength;

  if (arrB !== undefined) {
    if (arrA.length > arrB.length) {
      longestLength = arrA.length;
    } else {
      longestLength = arrB.length;
    }
  } else {
    return false;
  }

  for (var i = 0; i < longestLength; i++) {

    if (arrA[i] === arrB[i]) {

    } else {
      return false;
    }
  }

  return true;
}

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3, 7])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

module.exports = eqArrays;