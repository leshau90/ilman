function groupAnimals(animals) {
  // you can only write your code here!
  let result = [];
  let hash = '';
  for (let i = 0; i < animals.length; i++) {
    let x = 0;
    if (i == 0) {
      result.push([]);
      result[0].push(animals[i]);
      //console.log('intial: ',result)
    } else {
      x = returnRightGroupIndex(result, animals[i]);
      //the operation will either be pushing new element to a group or splicing and adding a group with a first member in it
      if (x == -1) {
        result.splice(whereToSplice(result, animals[i]), 0, [animals[i]]);
      } else {
        //console.log(`trying to push at group index: ${x} with value ${animals[i]}`);
        result[x].push(animals[i]);
      }
    }
  }
  return result;

}

function whereToSplice(arr, str) {
  // console.log('seems nothing like it determining where to splice ...')
  let i = arr.length;
  for (; i >= 0; i--) {
    if (0 == i) {
      return i;
    } else if (arr[i - 1][0] < str[0]) {
      return i;
    }
  }
}

function returnRightGroupIndex(arr, str) {
  // console.log('finding if previously inserted is there that has the same initial as '+str);
  // if it's right at the end return immidiately
  //console.log(arr);
  if (arr[arr.length - 1][0][0] == str[0]) {
    return arr.length - 1;
  }
  //first look back if there a already the 'same initial' group, in previous indexes if none return -1
  let i = arr.length - 1;
  for (; i >= -1; i--) {
    if (i == -1) return i;
    if (arr[i][0][0] == str[0]) {
      return i;
    }
  }
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]