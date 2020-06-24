"use strict";

//Q5: URLify a string
function urlify(str) {
  let newStr = str.split(" ").join("%20");
  //console.log(newStr);
}
urlify("www.thinkful.com         /tauh ida parv een");
//time complexity - O(1)

//Q6: Filtering an array
// function bFilter(num) {
//   var filtered = [];
//   for (let i = 0; i < this.length; i++) {
//     if (num(this[i], i, this)) filtered.push(this[i]);
//   }
// }
// bFilter([1,2,3,4,5,6,7,8]);
//time complexity - O(n)

//Q7: Max sum in the array
function maxSum(arr) {
  let currentSum = 0; //O(1)
  let maxSum = 0; //O(1)
  for (let i = 0; i < arr.length; i++) {
    //O(n)
    currentSum += arr[i];
    if (maxSum < currentSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}
// console.log(maxSum([4, 6, -3, 5, -2, 1]));
//O(n) - linear time complexity

//Q8: Merge arrays
function mergeArray(arr1, arr2) {
  let result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
}
// console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
//O(n log n) - sorting

//Q9: Remove characters
function removeChar(str) {
  let newStr = str.replace(/[aeiou]/gi, "");
  return newStr;
}
let originalStr = "this is a string to remove vowels from";
removeChar(originalStr);
// O(n)

//Q10: Products
function product(arr) {
  let result = [];

  let productSoFar = 1;

  for (let i = 0; i < arr.length; i++) {
    result[i] = productSoFar;
    productSoFar *= arr[i];
  }
  // console.log(productSoFar);

  productSoFar = 1;

  for (let j = arr.length - 1; j >= 0; j--) {
    result[j] *= productSoFar;
    productSoFar *= arr[j];
  }

  return result;
}
// var array = [1, 3, 9, 4];
// product(array);
// O(n)

//Q11: 2D array

function zeroes(arr) {
  var n = arr.length;
  var m = arr[0].length;

  if (n < 1 || m < 1) {
    return;
  }

  var column = false;
  for (let i = 0; i < n; i++) {
    if (arr[i][0] == 0) {
      column = true;
    }
    for (let j = 1; j < m; j++) {
      if (arr[i][j] == 0) {
        arr[i][0] = 0;
        arr[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (arr[i][0] == 0 || arr[0][j] == 0) {
        arr[i][j] = 0;
      }
    }
  }

  //first row
  if (arr[0][0] == 0) {
    for (let j = 0; j < m; j++) {
      arr[0][j] = 0;
    }
  }

  //first column
  if (column) {
    for (let i = 0; i < n; i++) {
      arr[i][0] = 0;
    }
  }
  console.log(arr);
  return arr;
}
var array = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
];
zeroes(array);

//O(n^2) = quadratic time complexity

//Q12: String Rotation
function stringRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let string = str1 + str1;
  return string.includes(str2);
}
console.log(stringRotation("amazon", "azonma"));
console.log(stringRotation("amazon", "azonam"));
//O(n) - linear time complexity
