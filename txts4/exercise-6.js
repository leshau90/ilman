function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    return 1;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

function calculate(num) {

    let half = Math.floor(num / 2);
    let str = '1';
    let  i, j;
    // increment is different for odd or even.
    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (; i <= half; i += j) {
        num % i === 0 ? str += ',' + i : false;
    }

    str += ',' + num; // Always include the original number.
    return str;
}