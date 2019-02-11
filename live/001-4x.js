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
  let result = ''
  let tracker = [0, 0, 0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] == 'red') {
      tracker[0]++;
    }
    if (input[i] == 'yellow') {
      tracker[1]++;
    }
    if (input[i] == 'blue') {
      tracker[2]++;
    }
  }
  let ix = 0,
    iy = 0;
  
    ix = Math.max(tracker[0], tracker[1], tracker[2]);
  

  //no dominance
  iy = 0;
  for (let i = 0; i < tracker.length; i++) {
    if (tracker[i]==ix){
      iy++;
    }
  }

  if (iy!=1) return 'there are no clear winner';
  return ix;
}

console.log(favoriteColor(['red', 'red', 'yellow'])); // "red the most favorite!"
console.log(favoriteColor(['blue', 'red', 'yellow', 'blue'])); // "blue the most favorite!"
console.log(favoriteColor(['yellow', 'yellow', 'yellow'])); // "yellow the most favorite!"
console.log(favoriteColor(['red'])); // "red the most favorite!"
console.log(favoriteColor([])); // "There are no favorite!"