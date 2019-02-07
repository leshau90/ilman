function pasanganTerbesar(num) {
  // you can only write your code here!

  
  let snum = `${num}`;
  
  //console.log(parseInt(snum.slice(0,2)));
  
  let [largest,next]=[0,0];
  for(let i = 2; i!=snum.length+1;i++){
     next = parseInt(snum.slice(i-2,i));
   // console.log(next , largest);
     largest = (largest<=next)?next:largest;
     //console.log('after: ', next , largest);
  }
  return largest;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99