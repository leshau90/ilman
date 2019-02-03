function xo(str) {
   // you can only write your code here!
   let [i,j]= [0,0];
   while(i<str.length){
      (str[i]==='x')?j++:(str[i]==='o')?j--:console.log('the result might be false..because there\'s a character other than lowercase x and o');      
      i++;
   }
   return j==0;
 }
 
 // TEST CASES
 console.log(xo('xoxoxo')); // true
 console.log(xo('oxooxo')); // false
 console.log(xo('oxo')); // false
 console.log(xo('xxxooo')); // true
 console.log(xo('xoxooxxo')); // true