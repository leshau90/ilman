function ubahHuruf(kata) {
    // you can only write your code here!
    let result = '';
    let hash = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; kata.length > i; i++) {
        if (kata[i] == 'z') {
            result += 'a';
        } else {
            let next = kata[i];
            //search and destroy
            for (let j = 0; hash.length > j; j++) {
                if (hash[j] == kata[i]) {
                    result += hash[j + 1];
                    break;
                }
            }            
        }
    }
    return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('zzzzzaza')); // aaaaabab