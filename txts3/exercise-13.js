function targetTerdekat(arr) {
  // you can only write your code here!
  let currLongestD = 0;
  let currD = 0;
  
  let [OexpectX, XexpectO, expectXOrO] = [false, false, true];
  for (let i = 0; i < arr.length; i++) {
    if (expectXOrO && arr[i] === " ") {
      //non counting state yet
      continue;
    } else if (expectXOrO && arr[i] === "x") {
      // if x expect o
      [OexpectX, XexpectO, expectXOrO] = [false, true, false];

    } else if (expectXOrO && arr[i] === "o") {
      //if o expect x
      [OexpectX, XexpectO, expectXOrO] = [true, false, false];

    } else if (OexpectX && arr[i] === "x") {

      ++currD;
      currLongestD = Math.max(currLongestD, currD);
      [OexpectX, XexpectO, expectXOrO] = [false, true, false];

    } else if (XexpectO && arr[i] === "o") {
      //was o  expecting x and it's x
      ++currD;
      currLongestD = Math.max(currLongestD, currD);
      //now change to expecting o
      [OexpectX, XexpectO, expectXOrO] = [true, false, false];

    } else if (OexpectX && arr[i] === "o") {
      //was o  and then o again..RESET
      currD = 0;
      currLongestD = Math.max(currLongestD, currD);
      //stillExpecting X no change
      //[expectX, expectO, expectXOrO]=[true,false,false];

    } else if (XexpectO && arr[i] === "x") {
      //was x  and then x again..RESET
      currD = 0;
      currLongestD = Math.max(currLongestD, currD);
      //stillExpecting O no change
      //[expectX, expectO, expectXOrO]=[true,false,false];

    } else if ((XexpectO || OexpectX) && arr[i] === ' ') {
      //it's either expecting o or x and found space then increment only but no checking
      ++currD;
    }

  }
  return currLongestD;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2