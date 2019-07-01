const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  ${actual}  ===  ${expected}`);
  }
  if (actual !== expected) {
    console.log(`Assertion Failed:  ${actual}  !==  ${expected}`);
  }

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// const eqArrays = require('./eqArrays.js');
const eqObjects = function(object1, object2) {
  var object1Keys = Object.keys(object1)
  console.log(object1Keys.length)

  var object2Keys = Object.keys(object2)
  console.log(object2Keys.length)
  if (object1Keys.length === object2Keys.length) {
    return true;
  } else {
    return false;
  }
  // if () {
  //   return true;
  // }

};

const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "2",
  a: "1"
};
assertEqual(eqObjects(ab, ba), true); // => true

const abc = {
  a: "1",
  b: "2",
  c: "3"
};
assertEqual(eqObjects(ab, abc), false); // => false

const cd = {
  c: "1",
  d: ["2", 3]
};
const dc = {
  d: ["2", 3],
  c: "1"
};
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};
assertEqual(eqObjects(cd, cd2), false); // => false