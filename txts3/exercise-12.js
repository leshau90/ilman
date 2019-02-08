function tentukanDeretGeometri(arr) {
  let currDiff = arr[1] / arr[0];
  let isItSameDiff = true;
  for (let i = 2; i < arr.length; i++) {
    isItSameDiff = isItSameDiff && (currDiff == (arr[i] / arr[i - 1]));

  }
  return isItSameDiff;

}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false