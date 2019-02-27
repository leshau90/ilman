/* 
==========
Encrypt Me
==========

[INSTRUCTIONS]
Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

Berikut adalah kamus huruf dari HBI
huruf biasa : abcdefghijklmnopqrstuvwxyz
huruf H8BI  : !@#$%^&*()-+1234567890[]{}

Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

Note:
- Selain karakter huruf biasa maka tidak akan di-translate

[EXAMPLE]
input: dimitri
output: $(1(86(

input: @wtian
output: @[8(!2

[RULES]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
- DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf / .includes!



==Pseudocode
SET variable 'map' to a string consisting of a-z
SET variable 'mapped' to a string consisting of all translated character
SET varaible 'dictionary' to an empty object

FOR (set 'i' to 0, 'i' less than map length; SET 'i' to 'i'+1 ) 
  DO CREATE new key in 'dictionary' with 'map' value at i and SET it to equal to the 'mapped' character of same index

SET variable 'result' to an empty string
FOR (set 'i' to 0, 'i' less than input length; SET 'i' to 'i'+1 ) 
  SET result to add character of input at index i, that is translated in dictionary beforehand

DISPLAY 'result'
*/

function encryptMe(input) {
  // your code here
  let map = 'abcdefghijklmnopqrstuvwxyz'
  let mappedTo = `!@#$%^&*()-+1234567890[]{}`
  let dict = {}
  //create dictionary
  for (let index = 0; index < map.length; index++) {
    dict[map[index]]=mappedTo[index]    
  }

  //translate
  let result =''

  for (let index = 0; index < input.length; index++) {
    result+=dict[input[index]];

  }
  return result;


}

console.log(encryptMe('dimitri')) // $(1(86(
console.log(encryptMe('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encryptMe('dimitr€€')) // $(1(86€€
console.log(encryptMe('d!mas')) // $!1!7
console.log(encryptMe('@wtian')) // @[8(!2