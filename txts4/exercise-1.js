function angkaPrima(angka) {
    // you can only write your code here!

    if (angka == 1 || angka == 3) return true;
    if (angka % 2 == 0 || angka % 3 == 0) return false;
    else
        return traceBackNecessarily(Math.floor(angka / 2) - 1, angka);
}

function traceBackNecessarily(start, dividend) {
    //we're only testing  halfway back, for every odd number, hence divided by 2
    if (start % 2 == 0) start++;
    //console.log('backtracking for: ', dividend, ' start dividing it with ', start);
    for (; start > 1; start -= 2) {
        //console.log('dividend:'+ dividend + ' start to divide at '+ start);
        if (dividend % start == 0) {
            //console.log('seems it can be devided by ..', start);
            return false;
        }
    }
    //console.log('dividend: is 1  Its a prime by backtracking');
    return true;
}
// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(93)); // false
console.log(angkaPrima(57)); // false
console.log(angkaPrima(53)); // true
console.log(angkaPrima(1003)); // false
console.log(angkaPrima(100045)); // false

// function findPrimeBelow(angka){
//     console.log('this method slow as hell, but saves memory')
//     console.log('trying to print primes below '+angka);

//     while(angka>0){
//         if(angkaPrima(angka))
//         {
//             console.log(angka);
//         }
//         angka--;
//     }
// }

// //fun test
// console.log(findPrimeBelow(90079090));

// function findPrimeBelowFast(angka){
//     console.log('this method slow as hell, but eats memory')
//     console.log('trying to print primes below '+angka);
//     let i = 0;
//     while(angka>=i){
//         if(angkaPrima(angka))
//         {
//             console.log(angka);
//         }
//         angka--;
//     }
// }