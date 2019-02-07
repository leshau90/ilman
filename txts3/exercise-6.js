function angkaPalindrome(angka){
   let i  = angka;
   for(;!palindromeKata(`${i}`);i++){

   };
   return i;


}

function palindromeKata(kata) {
   // you can only write your code here!
   
   let [result, i] = ['', kata.length - 1];
   for (; i >= 0; i--) {
      result += kata[i];
   }
   return result==kata;
   // you can only write your code here!

}
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001