function totalDigitRekursif(angka) {
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
  return result += totalDigitRekursif(angka - (result * (resultLevel / 10)));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
console.log(totalDigitRekursif(1111111)); // 7
console.log(totalDigitRekursif(1511111)); // 11