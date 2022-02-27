// 1. Please write a function that shows the usage of closures

function func1(func1Arg) {
  return (func2Arg) => {
    console.log(func1Arg);
    console.log(func2Arg);
  };
}
const newFunction = func1('func1Arg');
newFunction('func2Arg');

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

const sumOfArrayItems = (array) => {
  return array.reduce((a, b) => a + b);
};

console.log(sumOfArrayItems([9, 1, 22, 0, 2]));

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const flattenArr = (arr) => {
  const newArr = arr.flat();
  let isMultidimensional = false;
  newArr.forEach((val) => {
    if (Array.isArray(val)) {
      isMultidimensional = true;
    }
  });
  if (!isMultidimensional) {
    return newArr;
  } else {
    return flattenArr(newArr);
  }
};

console.log(flattenArr([[2, [4, [44, 5, 6]]], [4, [5], 6], [[2, 4], 4], 5]));

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const findElements = (arr1, arr2, common) => {
  const getElements = (arr1, arr2) => {
    return arr1.filter((val) => arr2.includes(val) === common);
  };

  const filteredArr1 = getElements(arr1, arr2);
  const filteredArr2 = getElements(arr2, arr1);

  const bothArrs = filteredArr1.concat(filteredArr2);

  return [...new Set(bothArrs)];
};

console.log(
  findElements(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e'], true)
);

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

console.log(
  findElements(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e'], false)
);

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const getTuples = (arr1, arr2) => {
  const arrOrder = ((arr1, arr2) => {
    if (arr1.length < arr2.length) {
      return [arr1, arr2];
    } else {
      return [arr2, arr1];
    }
  })(arr1, arr2);

  return arrOrder[0].map((val, index) => [val, arrOrder[1][index]]);
};

console.log(getTuples([1, 2, 3], [4, 5, 6, 7]));

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const getValueByPath = (path, obj) => {
  for (let i = 0; i < path.length; i++) {
    obj = obj[path[i]];
    if (obj === undefined) {
      return obj;
    }
  }
  return obj;
};

console.log(
  getValueByPath(['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } })
);

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const compareObjects = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  const checkIfValueIsObject = (val) =>
    val !== null && typeof object === 'object';

  for (let i = 0; i < keys1.length; i++) {
    const value1 = obj1[keys1[i]];
    const value2 = obj2[keys1[i]];

    const areValuesObject =
      checkIfValueIsObject(value1) && checkIfValueIsObject(value2);

    if (
      (areValuesObject && !compareObjects(value1, value2)) ||
      (!areValuesObject && value1 !== value2)
    ) {
      return false;
    }
  }

  return true;
};

console.log(compareObjects({ a: 'b', c: 'd' }, { c: 'd', a: 'b' }));
console.log(compareObjects({ a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }));

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const objWithoutKeys = (keys, obj) => {
  for (let i = 0; i < keys.length; i++) {
    delete obj[keys[i]];
  }
  return obj;
};

console.log(
  objWithoutKeys(['color', 'size'], {
    color: 'Blue',
    id: '22',
    size: 'xl',
  })
);
