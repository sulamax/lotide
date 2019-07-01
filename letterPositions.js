const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  ${actual}  ===  ${expected}`);
  }
  if (actual !== expected) {
    console.log(`Assertion Failed:  ${actual}  !==  ${expected}`);
  }
};

const letterPositions = function(sentence) {

  var search = 'h';
  var indexOfFirst = sentence.indexOf(search);
}
assertEqual(letterPositions("hello"));