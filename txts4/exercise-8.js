function tukarBesarKecil(kalimat) {
    if (kalimat == undefined || kalimat == '') return 'NO input';
    let result='';
    for (let i = 0; i < kalimat.length; i++) {
        let asciiCode = kalimat.charCodeAt(i);

        if ((asciiCode >= 97 && 122 >= asciiCode) || (asciiCode >= 65 && 90 >= asciiCode)) {

            if (asciiCode < 97) {
                //it's uppercase
                asciiCode += 32;
            } else if (asciiCode >= 97) {
                //lowercase
                asciiCode -= 32;
            }
        }

        result+=String.fromCharCode(asciiCode);
    }
    return result;
    // you can only write your code here!
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"