/*
===============
String validator
===============

[INSTRUCTION]
String dianggap valid apabila semua karakternya muncul dengan frekuensi yang sama.
Juga valid apabila menghapus 1 karakter pada 1 index dalam string, dan menjadikan frekuensi karakter sama.
Bila string valid, maka return "YES", dan sebaliknya "NO".

[EXAMPLE]
- Bila string adalah 'abc', maka valid karena {a = 1, b = 1, c = 1}
- Bila string adalah abcc, maka valid karena {a = 1, b = 1, c = 2},
apabila huruf c dihilangkan 1, maka {a = 1, b = 1, c = 1}

- Bila string adalah 'abccc', TIDAK valid karena { a = 1, b = 1, c = 3},
apabila huruf c dihilangkan satu, menjadi {a = 1, b = 1, c = 2}

- Bila string adalah 'abcdefghhgfedecba', maka valid karena
{ a = 2, b = 2, c = 2, d = 2, e = 3, f = 2, g = 2, h = 2},
apabila huruf e dihilangkan 1, menjadi { a = 2, b = 2, c = 2, d = 2, e = 2, f = 2, g = 2, h = 2}

[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift()
2. dilarang menggunakan regex
*/

function isValid(str) {
  // your code here
  let counter = {a:0} ;
  for (let index = 0; index < str.length; index++) {
    if(!str[index]){
      counter[str[index]]=1;
    }
    counter[str[index]]=counter[str[index]]+1;    
  } 
  
  // MATh..min greater than 1 for every key of counter object
  return ++counter.a;
}

//TEST CASES
console.log(isValid("aabbcd")); // NO
// console.log(isValid("aabbccddeefghi")); // NO
// console.log(isValid("a")); // YES
// console.log(isValid("aaaabbcc")); // NO
// console.log(isValid("aaaaabc")); // NO
// console.log(isValid("ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd")); // YES
// console.log(isValid("abcdefghhgfedecba")); // YES