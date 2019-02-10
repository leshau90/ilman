function kaliTerusRekursif(angka) {
  // you can only write your code here!
  let result = 0;
  if (angka == 0) {
    return 0;
  }
  if (angka <= 9) {
    return angka;
  }
  //getting the leftmost without string-fy-ing
  let resultLevel = 10,
    leftMostPart = 100;
  while (leftMostPart > 10) {
    leftMostPart = angka / resultLevel;
    resultLevel *= 10;
  }
  //console.log(divv/10);
  result = Math.floor(leftMostPart);
  //recursion on remaining number the leftmost without string-fy-ing
  result *= kaliTerusRekursif(angka - (result * (resultLevel / 10)));
  
  return (result<10)?result:kaliTerusRekursif(result);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6