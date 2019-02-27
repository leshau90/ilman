/*
============
Total Primes
============

[INSTRUCTIONS]
totalPrimes adalah sebuha function yang menerima 1 parameter berupa number.
function akan mereturn sebuah value dari hasil total prima yang didapat

[EXAMPLES]
input : 3
process: [2, 3, 5] --> 2 + 3 + 5 = 10
output: 10

input : 5
process: [2, 3, 5, 7, 11] --> 2 + 3 + 5 + 7 + 11 = 10
output: 28

[RULES]
- WAJIB menggunakan pseudocode/ algoritma
- DILARANG menggunakan REGEX
*/

/*
Your Pseudocode here

*/

function totalPrimes(num) {
  // your code here
  let startAt = 1;
  let result = 0;
  for (let i = num; i != 0;) {
    startAt++;
    if (isPrime(startAt)) {
      // console.log(i, 'adding ',startAt, 'where num is', num)
      result += startAt;
      i--;
    } else continue;
  }
  return result;

}

function isPrime(num) {
  // let arr = [];
  if (num ==2  || num  == 3||num  == 5) return true;
  if (num % 2 == 0 || num % 3 == 0|| num % 5 == 0) return false;
  for (let i = 5; i < Math.ceil(num/2); i++) {
    if (num % i == 0) {

    return false;
    }

  }
  return true;
}

console.log(totalPrimes(3)) // 10
console.log(totalPrimes(5)) // 28
console.log(totalPrimes(10)) // 129
console.log(totalPrimes(100)) // 24133
console.log(totalPrimes(0)) // 0