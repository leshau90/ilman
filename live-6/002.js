/*
=====================
PAIR LETTER SWAPPER
=====================

[INSTRUCTIONS]
Terdapat fungsi pairLetterSwapper yang menerima 1 paramater berupa string, fungsi ini berguna untuk mencari pasangan kata yang urut
kata urut yang dimaksud adalah kata berikutnya sesuai dengan huruf abjad: 'abc...xyz'

pada parameter yang diberikan dan mengganti kata yang urut dengan kata urut setelahnya

[EXAMPLES]
input: 'abcd'
keterangan : 
- pada parameter 'abcd' terdapat pasangan urut ab, bc , dan cd (karena setelah a -> b, setelah b -> c, dst)
- ab akan berubah menjadi bc
- bc akan berubah menjadi cd
- cd akan berubah menjadi de
output: 'bccdde' 

input: 'dede'
keterangan : 
- pada parameter 'dede' terdapat pasangan urut de, dan de 
- kenapa ed tidak termasuk? karena setelah e seharusnya f, bukan d
- de akan berubah menjadi ef
- de akan berubah menjadi ef
output: 'efef'

[RULES]
-dilarang menggunakan regex, dan charcodeat
-dilarang menggunakan split, slice, splice
-dilarang menggunakan fungsi ES 6
*/
function pairLetterSwapper(str) {
  // your code here
  let map = {
    a: 'b',
    b: 'c',
    c: 'd',
    d: 'e',
    e: 'f',
    f: 'g',
    g: 'h',
    h: 'i',
    i: 'j',
    j: 'k',
    k: 'l',
    l: 'm',
    m: 'n',
    n: 'o',
    o: 'p',
    p: 'q',
    q: 'r',
    r: 's',
    s: 't',
    t: 'u',
    u: 'v',
    v: 'w',
    w: 'x',
    x: 'y',
    y: 'z',
  };

  let result = '';
  for (let i = 0; i + 1 < str.length; i++) {
    if (map[str[i]]==str[i+1]) {
      result+=str[i+1]+map[str[i+1]];
    }

  }
  return result;

}

function isFollowing(x, y) {

}

function mSearch() {

  return false;
}

console.log(pairLetterSwapper('abcd'))
//bccdde
console.log(pairLetterSwapper('dede'))
//efef
console.log(pairLetterSwapper('xaefgxy'))
//fgghyz













// for (let i = 97; i < 123; i++) console.log(`${String.fromCharCode(i)}:'${String.fromCharCode(i+1)}',`);