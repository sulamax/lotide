const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  ${actual}  ===  ${expected}`);
  }
  if (actual !== expected) {
    console.log(`Assertion Failed:  ${actual}  !==  ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const head = function(array) {
  return array[0];
};

module.exports = head;