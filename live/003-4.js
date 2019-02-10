/* 
===================
Distance Coordinate
===================

[INSTRUCTION]
buatlah program yang dapat menentukan jarak antara dari character o dan x 
pada array multidimensi, preview : 
[
  ['','','o',''],
  ['','','',''],
  ['','','',''],
  ['x','','','']
]

[EXAMPLE]
console.log(distanceCoordinate([
  ['','','o',''],
  ['','','',''],
  ['','','',''],
  ['x','','','']
]))

step by step solving :
[
    ['', '', 'o',''],
    ['', '', '1',''],
    ['', '', '2',''],
    ['x5','4','3','']
]
jika kita perhatikan urutan angka - angka diatas, maka jarak antara 
o dan x adalah 5. dimana posisi x dihitung sebagai 1 langkah 

maka output : 5
*/

function distanceCoordinate(board) {
    // your code here
    let enumPos = []
    for (let i = 0; i < board.length; i++) {
        enumPos.push(-1);
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == 'o' || board[i][j] == 'x') {
                enumPos[i] = j;
            }
        }
    }
    let result = 0,
        fPos = 0;
    for (let i = 0; i < enumPos.length; i++) {
        if (enumPos[i] == -1 && result == 0) {
            continue;
        } 
        if (enumPos[i] > -1 && result == 0) {
            // console.log(`it's not -1 and result is`,result);
            fPos = enumPos[i];
            result++;
        } 
        if (enumPos[i] == -1 && result != 0) {
            // console.log(`it's -1 and result is`,result);
            
            result++;
        }
         if (enumPos[i] > -1 && result != 0) {
            // console.log(`it's not -1 and result is`,result);
            //fPos = enumPos[i];
            result+=Math.abs(fPos-enumPos[i]);
            // console.log(`should be added by`, Math.abs(fPos-enumPos[i]));
        }

    }
    console.log(enumPos);
    return result;

}

console.log(distanceCoordinate([
    ['', '', 'o', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['x', '', '', '']
])) // 5

console.log(distanceCoordinate([
    ['', '', '', ''],
    ['', 'x', '', ''],
    ['', '', '', ''],
    ['o', '', '', '']
])) // 3

console.log(distanceCoordinate([
    ['', '', '', 'o'],
    ['', '', '', ''],
    ['', '', '', ''],
    ['x', '', '', '']
])) // 6

console.log(distanceCoordinate([
    ['', '', '', 'x'],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', 'o']
])) // 3