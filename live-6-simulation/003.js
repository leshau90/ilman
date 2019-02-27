/* 
===================
Two Array Operation
===================

[INSTRUCTION]
Buatlah sebuah function yang dapat mengoperasikan bilangan - bilangan yang ada.
didalam 2 buah array sesuai dengan masing - masing indexnya.

diberikan 2 buah array yang akan dioperasikan 
- jika bilangan tersebut berada pada index yang genap, maka tambahkan (+)
bilangan pada index array yang ke satu dengan index array yang ke dua 
- jika bilangan tersebut berada pada index yang ganjil, maka kurangkan (-)
bilangan pada index array yang ke satu dengan index array yang ke dua 
- jika panjang ke dua array tidak sama,
maka masukkan saja bilangan - bilangan tersebut ke dalam hasilnya 

[EXAMPLE]
twoArrayOperation([1,2,3],[1,2,3])
array1 : [1, 2, 3]
          +  -  +
array2 : [1, 2, 3]
result : [2, 0, 6]

twoArrayOperation([12,34,11,23,12],[11,78,45,20,42])
array1 : [12, 34, 11, 23, 12]
            +   -   +   -   +
array2 : [11, 78, 45, 20, 34]
result : [23,-44, 56, 3, 46]

twoArrayOperation([-4, 5, 57, 33, -90, 0],[4, 2, 54, 24])
array1 : [-4, 5, 57, 33, -90, 0]
          +   -   +   -    +
array2 : [4,  2, 54, 24,  34]
result : [0,  3, 111, 9, -56, 0]
*/

function twoArrayOperation(arr1, arr2) {
  // Code here
  let result = []
  let a1, a2;
  a1 = (arr1.length>arr2.length)?arr1:arr2;
  a2 = (arr1.length<arr2.length)?arr1:arr2;
  
  for (let i = 0; i < a1.length; i++) {
    let x = a2[i]||0;
    if (i % 2 == 0) {
      
      result.push(a1[i]+x)    
    } else {
      result.push(a1[i]-x)
    }

  }
  return result;
}

console.log(twoArrayOperation([-4, 5, 57, 33, -90, 0], [4, 2, 54, 24, 34])) // [ 0, 3, 111, 9, -56, 0]
console.log(twoArrayOperation([12, 34, 11, 23, 12], [11, 78, 45, 20, 42])) // [ 23, -44, 56, 3, 54 ]
console.log(twoArrayOperation([1, 2, 3], [1, 2, 3])) // [ 2, 0, 6 ]