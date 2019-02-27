/**

  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa angka.
  Function ini akan mengembalikan array multidimensi angka x angka yang isi value
  dari array multidimensi tersebut menyerupai `board snakes and ladders`

  Contoh 1:
  input: 3
  output:
      [
        [7, 8, 9],
        [6, 5, 4],
        [1, 2, 3]
      ]

  Contoh 2:
  input: 4
  output:
      [
        [ 16, 15, 14, 13 ],
        [ 9, 10, 11, 12 ],
        [ 8, 7, 6, 5 ],
        [ 1, 2, 3, 4 ]
      ]


NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'

 - NILAI FULL(100) AKAN DIBERIKAN JIKA BERHASIL MENYELESAIKAN KASUS DIATAS

 - NILAI 80 AKAN DIBERIKAN JIKA value angka di dalam array tersebut tidak persis
   menyerupai snakes and ladders TAPI angka 1 harus tetap berada di kolom paling bawah!
   CONTOH:
     [
       [ 13, 14, 15, 16 ],
       [ 9, 10, 11, 12 ],
       [ 5, 6, 7, 8 ],
       [ 1, 2, 3, 4 ]
     ]

**/
function squareNumber(num) {
  //square numbered array of arrays , snake-ladder like

  if (num < 3 || num == undefined) return false;
  var result = [];
  var i = 0;
  var horizontalIndex = num - 1;
  var end = num * num;
  while (i < num) {
    result.push(new Array(num));
    i++;
  }
  i = 1;
  while (i < end + 1) {
    //different direction for every horizontal index
    if (i != 1) horizontalIndex--;

    //and the direction of filling is affected by whether horizontal index is odd or even  and also by the input number is it odd or even 
    if (horizontalIndex % 2 == (num % 2)) {
      //from right to left
      for (let u = result[horizontalIndex].length - 1; u >= 0; u--) {

        result[horizontalIndex][u] = i++;
      }

    } else {
      //from left to right
      for (let u = 0; u < result[horizontalIndex].length; u++) {

        result[horizontalIndex][u] = i++;
      }

      // result[horizontalIndex].push(i);

    }
    // i++;
  }
  return result;
}


console.log(squareNumber(3));
// [ [ 7, 8, 9 ], [ 6, 5, 4 ], [ 1, 2, 3 ] ]

console.log(squareNumber(4));
// [ [ 16, 15, 14, 13 ],
//   [ 9, 10, 11, 12 ],
//   [ 8, 7, 6, 5 ],
//   [ 1, 2, 3, 4 ] ]

console.log(squareNumber(5));
// [ [ 21, 22, 23, 24, 25 ],
//   [ 20, 19, 18, 17, 16 ],
//   [ 11, 12, 13, 14, 15 ],
//   [ 10, 9, 8, 7, 6 ],
//   [ 1, 2, 3, 4, 5 ] ]

console.log(squareNumber(2)); // Minimal input adalah 3

//with no unshift


console.log(squareNumber(3));
console.log(squareNumber(4));
console.log(squareNumber(5));

console.log(squareNumber(10));


// function squareNumber(num) {
//     //square numbered array of arrays , snake-ladder like

//     if (num < 3 || num == undefined) return false;
//     var result = [];
//     var i = 0;
//     var horizontalIndex = num-1;
//     var end = num * num;
//     while (i < num) {
//         result.push([]);
//         i++;
//     }
//     i = 1;
//     while (i < end + 1) {
//         //different direction for every horizontal index
//         if (i!=1 && i%num==1) horizontalIndex--;

//         //and the direction of filling is affected by whether horizontal index is odd or even  and also by the input number isit odd or even 
//         if (horizontalIndex % 2 == (num%2)) {

//             result[horizontalIndex].unshift(i);
//         } else {
//             result[horizontalIndex].push(i);

//         }
//         i++;
//     }
//     return result;
// }