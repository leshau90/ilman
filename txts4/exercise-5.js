function ubahHuruf(kata) {
    // you can only write your code here!
    let result = '';
    for (let i = 0; kata.length > i; i++) {
        if (kata[i] == 'z') {
            result += 'a';
        } else result += (String.fromCharCode(kata.charCodeAt(i) + 1));
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