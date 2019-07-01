// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed:  ${actual}  ===  ${expected}`);
//   }
//   if (actual !== expected) {
//     console.log(`Assertion Failed:  ${actual}  !==  ${expected}`);
//   }

// };

// const eqArrays = function(arrA, arrB) {

//   var longestLength;

//   if (arrB !== undefined) {
//     if (arrA.length > arrB.length) {
//       longestLength = arrA.length;
//     } else {
//       longestLength = arrB.length;
//     }
//   } else {
//     return false;
//   }

//   for (var i = 0; i < longestLength; i++) {

//     if (arrA[i] === arrB[i]) {

//     } else {
//       return false;
//     }
//   }

//   return true;
// }

let findKey = function(object, callback) {

  for (let [key, value] of Object.entries(object)) {
    console.log(`${key}: ${value}`);
    if (object = findKey) {
      return key;
    }
  }
}

findKey({
  "Blue Hill": {
    stars: 1
  },
  "Akaleri": {
    stars: 3
  },
  "noma": {
    stars: 2
  },
  "elBulli": {
    stars: 3
  },
  "Ora": {
    stars: 2
  },
  "Akelarre": {
    stars: 3
  }
}, x => x.stars === 2) // => "noma"