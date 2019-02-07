function mutation(arr) {
    var [wrd, wrd2, wrd3, lng, isChanged] = [arr[0].toLowerCase(), arr[1].toLowerCase(), '', arr[0].length, false];

    console.log(wrd, wrd2, lng, isChanged);

    for (let i = 0; i < wrd2.length; i++) {
        console.log(`this is iteration number ${i} out of ${wrd2.length-1}`);
        for (let j = 0; j < wrd.length; j++) {
            if (wrd2[i] == wrd[j]) {
                console.log(' YES ' + wrd2[i] + ' is equal to ' + wrd[j]);
                console.log(wrd.slice(0, j) + ' AND ' + wrd.slice(j + 1, wrd.length));
                wrd3 = `${wrd.slice(0,j)}${wrd.slice(j+1,wrd.length)}`
                console.log('wrd now is ' + wrd);
                break;
            }
        }
        if (isChanged) wrd = wrd3;
    }

    return !(wrd.length == lng - wrd2.length);
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));


//freecodecamp chunkingarray in place 05/02/2019
function chunkArrayInGroups(arr, size) {
    // Break it up.
    
    
   // console.log(arr.splice(0,0,arr.splice(0,size)));
    for (let i=0;i<arr.length;i++){
      if(i+size>arr.length){
       arr.splice(i,0,arr.splice(i,arr.length-i)); 
      }
      else  arr.splice(i,0,arr.splice(i,size));
    }
    return arr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);