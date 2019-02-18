/*
======================
Highest Global Minimum
======================

[INSTRUCTIONS]

highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.

[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])
firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]

nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8

karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.
*/

/*
Pseducode/ algoritma anda di sini
  SET globalMin1 to first element of first array
  SET globalMin2 to first element of second array

  //iterateing to find local minimum
  FOR every element in first array
    IF globalMin1< element[current] of the first array
      SET globalMin1 to element[current] of the first array

  
  FOR every element in second array
    IF globalMin1< element[current] of the second array
      SET globalMin1 to element[current] of the Second array

  SET result to Whichever greater between globalmin1 and globalmin2
  RETURN result
*/

function highestGlobalMinimum(firstArr, secondArr) {
  // code anda disini
  let globalMin1 = firstArr[0]
  let globalMin2 = secondArr[0]
  for (let index = 0; index < firstArr.length; index++) {
    if (firstArr[index] < globalMin1) {
      globalMin1 = firstArr[index];
    }

  }
  for (let index = 0; index < secondArr.length; index++) {
    if (secondArr[index] < globalMin2) {
      globalMin2 = secondArr[index];
    }

  }
  return globalMin1 < globalMin2 ? globalMin2 : globalMin1;

}

console.log(highestGlobalMinimum([1, 1, 1], [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12], [33, 88, 99, 11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2], [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2], [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5