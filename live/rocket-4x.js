/*
===========
MineSweeper
===========

[INSTRUCTIONS]
Seorang tentara sedang berada di ladang ranjau kita harus membantu tentara untuk menemukan jumlah ranjau yang ada disekeliling dekat tentara.
terdapat posisi tentara didalam map adalah huruf O dan posisi bom adalah X
tugas kita harus mencari tahu bom yang ada di delapan penjuru mata angin dari posisi tentara. ingat yang dihitung hanya bom yang ada di delapan penjuru mata angin dekat tentara


[EXAMPLE]
INPUT: [
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', 'O', 'X', ' ', ' '],
  [' ', 'X', ' ', 'X', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
OUTPUT: 4
INPUT: [
  [' ', ' ', ' ', ' ', ' ', 'O'],
  [' ', ' ', ' ', ' ', 'X', 'X'],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
OUTPUT: 2
*/

function MineSweeper(array) {
  // your code here
  //find 0
  let result = 0;
  let o = [
    [-1][-1]
  ];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 'O') {
        o[0] = i;
        o[1] = j;
        break;
      }
    }

  }
  var i = o[0];
  var j = o[1];

  // console.log(i, j);
  // console.log(array[i - 1][j]);
  //north
  if (i - 1 >= 0 &&
    array[i - 1][j] != undefined &&
    array[i - 1][j] === 'X') {
    // console.log('N');
    result++;
  }
  //northeast
  if (i - 1 >= 0 && array[i - 1][j + 1] != undefined && array[i - 1][j + 1] === 'X') {
    // console.log('NE');
    result++;
  }
  //east
  if (array[i][j + 1] != undefined && array[i][j + 1] === 'X') {
    result++;
    // console.log('E');
  }

  //southeast
  if (array[i + 1][j + 1] != undefined && array[i + 1][j + 1] === 'X') {
    result++;
    // console.log('SE');
  }
  //south
  if (array[i + 1][j] != undefined && array[i + 1][j] === 'X') {
    result++;
    // console.log('S');
  }
  //southwest
  if (j - 1 >= 0 && array[i + 1][j - 1] != undefined && array[i + 1][j - 1] === 'X') {
    result++;
    // console.log('SW');

  }

  //west
  if (array[i][j - 1] != undefined && array[i][j - 1] === 'X') {
    result++;
    // console.log('W');
  }
  //northwest
  if (i - 1 >= 0 && j - 1 >= 0 && array[i - 1][j - 1] != undefined && array[i - 1][j - 1] === 'X') {
    result++;
    // console.log('NW');
  }
  return result;
}
var board = [
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', 'O', 'X', ' ', ' '],
  [' ', 'X', ' ', 'X', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
console.log(MineSweeper(board)) // 4
var board2 = [
  [' ', ' ', ' ', ' ', ' ', 'O'],
  [' ', ' ', ' ', ' ', 'X', 'X'],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
console.log(MineSweeper(board2)) // 2
var board3 = [
  ['X', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', ' ', 'X', 'X', ' '],
  [' ', ' ', 'X', 'O', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', 'X', ' ', ' ', 'X', ' ']
]
console.log(MineSweeper(board3)) // 3


// var board4 = [
//   [' ', ' ', ' ', ' ', ' ', ' '],
//   [' ', ' ', ' ', 'X', ' ', ' '],
//   [' ', ' ', ' ', 'O', ' ', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ']
// ]
// console.log(MineSweeper(board4)) // 1