function sorting(arrNumber) {
  // code di sini
  //console.log(arrNumber);
  //insertion sort
  if (arrNumber.length == 1) return arrNumber;
  for (let i = 1; i < arrNumber.length; i++) {
    for (let j = i; j > 0 && arrNumber[j - 1] > arrNumber[j]; j--) {
      [arrNumber[j - 1], arrNumber[j]] = [arrNumber[j], arrNumber[j - 1]];
      //   console.log(arrNumber);
    }
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  if (arrNumber.length == 0) return '';
  let counter = 0;
  let max = arrNumber[arrNumber.length - 1];
  for (let i = arrNumber.length - 1; i >= 0; i--) {
    //console.log('comparing',max, arrNumber[i] )
    if (max == arrNumber[i]) {
      counter++;
    } else break;
  }
  return `angka paling besar adalah ${max} dan jumlah kemunculan sebanyak ${counter} kali`;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''