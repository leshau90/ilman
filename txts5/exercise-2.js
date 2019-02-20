function changeVocals(str) {
  //code di sini
  let result = '';
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'a':
      case 'i':
      case 'u':
      case 'e':
      case 'o':
      case 'A':
      case 'I':
      case 'U':
      case 'E':
      case 'O':
        result += String.fromCharCode(str.charCodeAt(i) + 1);
        break;
      default:
        result += str[i];
    }
  }
  return result
}

function reverseWord(str) {
  //code di sini
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result
}

function setLowerUpperCase(str) {
  //code di sini
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      result += String.fromCharCode(str.charCodeAt(i) + 32);
    } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      result += String.fromCharCode(str.charCodeAt(i) - 32);
    } else result+=str[i];
  }
  return result;
}

function removeSpaces(str) {
  //code di sini
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    } else {
      result += str[i];
    }
  }
  return result;
}

function passwordGenerator(name) {
  //code di sini
  //change vocal -> reverseword -> upperlower -> removespaces
  if (name.length<=4) return `Minimal karakter yang diinputkan adalah 5 karakter`;
  return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga

*/