/* 
====================
Count Place Distance
====================

[INSTRUCTION]
Fungsi countDistance dibuat untuk menghitung jarak dua tempat yang diwakili oleh huruf 'o' di dalam array multidimensi
Terdapat 2 parameter yang diperlukan oleh fungsi countDistance, param pertama berupa array multidimensi,
param kedua berupa number yang menunjukkan uang yang kita miliki saat ini

Ketika melewati huruf 'x' maka uang pengendara akan berkurang sebesar 10000 , dan jika uang habis atau kurang dari 10000
maka perjalanan akan terhenti

[EXAMPLE]
Input :  
[
  ['', 'o', 'x', 'x', '', 'o'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
] 
dan uang = 40000
output :  
Sisa uang : 20000, jarak tempuh: 30 km 

Input :  
[
  ['', 'o', 'x', 'x', 'x', 'x'],
  ['o', '', '', '', ''],
  ['', '', '', '', ''],
] 
dan uang = 30000
output :  
Uang anda habis, jarak tersisa sampai tujuan adalah 10 km

[RULES]
- Dilarang menggunakan indexOf, sort, includes.
- Dilarang menggunakan regex .match dan lainnya!
*/


function countDistance(arr, money) {
    // code anda disini
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            temp.push(arr[i][j]);
        }
    }
    //finding two o's
    let start = -1,
        end = -1;

    for (let i = 0; i < temp.length; i++) {
        // (temp[i] == 'o' && start == -1) ? start = i: (temp[i] == 'o' && end == -1) ? end = i :null;
        (temp[i] == 'o' && start == -1) ? start = i: (temp[i] == 'o' && end == -1) ? end = i : null;
    }
    console.log(start, end);
    if (start == -1) return 'you should start somewhere';
    if (end == -1) return 'so you wanna go beyond limit..ckckc';

    let midwayStop = -1;
    for (let i = start; i < end; i++) {
        // (temp[i] == 'o' && start == -1) ? start = i: (temp[i] == 'o' && end == -1) ? end = i :null;
        (temp[i] == 'x' && money >= 10000) ? money -= 10000: (money < 10000 && temp[i] == 'x') ? midwayStop = i : null;

    }



    if (midwayStop != -1) {
        console.log(midwayStop,end);
        return `Uang anda habis, jarak tersisa sampai tujuan adalah ${(end-midwayStop+1)*10} km`;
    }
    else return `Sisa uang : ${money}, jarak tempuh: ${(end-start-1)*10} km`;
}

console.log(countDistance([
    ['', 'o', '', '', 'o'],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
], 40000))
// output:
/* Sisa uang : 40000, jarak tempuh: 20 km */

console.log(countDistance([
    ['', '', 'o', '', ''],
    ['', 'x', ''],
    ['', '', '', '', '', 'x'],
    ['', 'o', '', '']
], 50000))
// output:
/* Sisa uang : 30000, jarak tempuh: 120 km */

console.log(countDistance([
    ['', '', '', '', ''],
    ['o', 'x', 'x', 'x', ''],
    ['', '', '', 'x', '', 'x'],
    ['', 'o', '', '']
], 40000))
// output:
/* Uang anda habis, jarak tersisa sampai tujuan adalah 30 km*/

console.log(countDistance([
    ['', 'o', 'x', 'x', 'x', 'x'],
    ['o', '', '', '', ''],
    ['', '', '', '', ''],
], 30000))
// output:
/* Uang anda habis, jarak tersisa sampai tujuan adalah 10 km*/