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
// assertArraysEqual("Lighthouse Labs", "Bootcamp");
// assertArraysEqual(1, 1);


const middle = function(array, sub) {

  var middle_index = parseInt((array.length / 2).toFixed(), 10) - 1;
  if (middle_index === -1) {
    console.log('Array Empty')
    return [];
  } else {
    console.log('Middle value in array [' + array + '] is ' + array[middle_index]);
    return [array[middle_index]];
  }
}

// success
// [1,2,3] [2]
// [1,2,3,4] [2,3]

// fail
// [1,2,3,4] [2]

// error/fail
// [], [2]
// [1,2,3,4] []

assertArraysEqual(middle([1, 2, 3]), [2]) //
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // true
module.exports = middle;