// const eqArrays = function(arrA, arrB) {

//  var longestLength;

//  if( arrA.length > arrB.length) {
//    longestLength = arrA.length;
//  } else {
//    longestLength = arrB.length;
//  }

//   for (var i = 0; i < longestLength; i++) {

//     if (arrA[i] === arrB[i]) {

//     } else {
//       return false;
//     }
//   }

//   return true;
// }



// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log(`Assertion Passed:  ${actual}  ===  ${expected}`);
//   }
//   else {
//     console.log(`Assertion Failed:  ${actual}  !==  ${expected}`);
//   }
// }
// assertArraysEqual("Lighthouse Labs", "Bootcamp");
// assertArraysEqual(1, 1);

let without = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // pop value from stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  //reverse to restore input order
  return res.reverse();
}
flatten(without);