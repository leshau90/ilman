function cariModus(arr) {
    // you can only write your code here!
    let occurences = new Object();

    let currModus = 0;
    for (let i = 0; arr.length > i; i++) {
        if (!occurences.hasOwnProperty(`${arr[i]}`)) {
            occurences[`${arr[i]}`] = 1;
        } else occurences[`${arr[i]}`]++;
        //console.log('which one is larger? ', currModus, occurences[`${arr[i]}`] )
        currModus = Math.max(currModus, occurences[`${arr[i]}`]);
    }

    //console.log(occurences, ' with current modus is ', currModus);
    

    if (currModus == 1 || currModus == arr.length) {
        return -1;
    } 
    //let's determine who's first
    for (let i = 0; arr.length > i; i++) {
        //console.log('is it true that .. ', occurences[`${arr[i]}`], currModus, occurences[`${arr[i]}`]==currModus);
        if (occurences[`${arr[i]}`]==currModus) {
        //console.log('Yes, then first one is this one: ', arr[i]);
            return arr[i];
        }
    }


///    return -1;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1