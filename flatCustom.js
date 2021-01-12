const isObject = (el) =>
  Object.prototype.toString.call(el) === "[object Object]";
const isArray = (el) => Array.isArray(el);

/**
 * Function for flattening array with nested arrays and objects
 * @returns { Array } - the flattened array
 */
const flatten = (arr) => {
  const result = [];

  arr.forEach((item) => {
    if (isArray(item)) {
      result.push(...flatten(item));
    } else if (isObject(item)) {
      result.push(...flatten(Object.values(item)));
    } else {
      result.push(item);
    }
  });

  return result;
};

Array.prototype.flatCustom = function () {
  return flatten(this);
};

const arr1 = [[2], 3, {}, [1, 2]];
const arr2 = [2, 3, [[1, { a: "text" }], [[2]]], 5];
const arr3 = [5, { a: 1 }, [1, [3, {}, { c: "a", d: [2, 2] }], [[6]]]];

console.log(arr1.flatCustom());

console.log(arr2.flatCustom());

console.log(arr3.flatCustom());
