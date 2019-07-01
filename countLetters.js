const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  ${actual}  ===  ${expected}`);
  }
  if (actual !== expected) {
    console.log(`Assertion Failed:  ${actual}  !==  ${expected}`);
  }
};

const counterLetters = function(str) {
  var obj = {};
  for (var position = 0; position < str.length; position++) {
    var char = str.charAt(position);
    if (obj[char]) {
      obj[char]++
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}
assertEqual(counterLetters("lighthouse in the house").h, 4);
console.log(counterLetters("lighthouse in the house"));