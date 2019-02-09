function checkAB(num) {
    // you can only write your code here!

    let [BexpectA, AexpectB, expectAB] = [false, false, true];
    // let dist = 0,

    for (let i = 0; num.length > i; i++) {
        //console.log('iteration number:', i + 1, 'for', num[i]);
        if (num[i] == 'a') {
            for (let j = i; j < num.length; j++) {
                
                if (num[j] == 'b') {
                    // console.log('YES a got b and dist', j-i);
                    if (j-i==4) return true;
                }
            }
        }
        if (num[i] == 'b') {
            for (let j = i; j < num.length; j++) {
                if (num[j] == 'a') {
                    // console.log('YES b got a and dist', j-i);
                    if (j-i==4) return true;
                }
            }
        }
    }
    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false