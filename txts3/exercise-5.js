function palindrome(kata) {
   // you can only write your code here!

   let [result, i] = ['', kata.length - 1];
   for (; i >= 0; i--) {
      result += kata[i];
   }
   return result==kata;
   // you can only write your code here!

}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false