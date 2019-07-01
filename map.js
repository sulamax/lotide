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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"]


var word = new Map();
word.set('ground', 'foo', 'susana', 'sula', 'max');
console.log(word.delete('ground'));

var map1 = new Map();
map1.set('ground', 'foo', 'susana', 'sula', 'max');
console.log(map1.has('foo'));

let result = map(words, function(item) {
  return 'ehllo' + item;
})
console.log(result);