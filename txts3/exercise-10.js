function perkalianUnik(arr) {
  // you can only write your code here!
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    let acc = 1;
    for (let index2 = 0; index2 < arr.length; index2++) {
      if (index2 == index) {
        continue;
      } else acc *= arr[index2];
    }
    result.push(acc);
  }
  return result;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]