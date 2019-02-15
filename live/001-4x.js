/*
==============
Favorite Color
==============

[INSTRUCTIONS]
Kita tahu bahwa warna dasar adalah: 'red', 'yellow', 'blue'
Pada sebuah panelis pemilihan warna, function akan me-return output warna terbanyak.
Apabila jumlah 'red' dalam array lebih besar dari jumlah 'yellow' dan 'blue', maka function akan mereturn "red the most favorite!".
Apabila jumlah 'yellow' dalam array lebih besar dari jumlah 'red' dan 'blue', maka function akan mereturn "yellow the most favorite!".
Apabila jumlah 'blue' dalam array lebih besar dari jumlah 'red' dan 'yellow', maka function akan mereturn "blue the most favorite!".
Apabila ada jumlah yang sama dan jumlah tersebut merupakan jumlah terbesar, tampilkan "There are no clear winner!"

[RULE]
- Wajib menuliskan algoritma/pseudocode.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
*/

function favoriteColor(input) {
  // your code here!
  console.log('-----------------')
  let t = [0, 0, 0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] == 'red') {
      t[0]++;
    } else if (input[i] == 'blue') {
      t[1]++;
    } else if (input[i] == 'yellow') {
      t[2]++;
    }

  }
  let result = [0];

  for (let i = 1; i < t.length; i++) {

    if (t[result[0]] == t[i]) {
      result.push(i);
    } else if (t[result[0]] < t[i]) {
      // console.log(result[0] < t[i]);
      result.length = 0;
      result.push(i);
    }
    // console.log(result);
  }

  if (result.length >1) {
    return "There are no favorite!";
  }

  if (result.length == 1) {
    if (result[0] == 0) {
      return `red is the most popular`;
    }
    if (result[0] == 1) {
      return `blue is the most popular`;
    }
    if (result[0] == 2) {
      return `yellow is the most popular`;
    }
  }
}

console.log(favoriteColor(['red', 'red', 'yellow'])); // "red the most favorite!"
console.log(favoriteColor(['blue', 'red', 'yellow', 'blue'])); // "blue the most favorite!"
console.log(favoriteColor(['yellow', 'yellow', 'yellow'])); // "yellow the most favorite!"
console.log(favoriteColor(['red'])); // "red the most favorite!"
console.log(favoriteColor([])); // "There are no favorite!"