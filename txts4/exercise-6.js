function digitPerkalianMinimum(angka) {
    // you can only write your code here!

    let half = Math.floor(angka / 2);
    let str = '1';
    let i, j;
    let digitNum = calculateDigit(1, angka);
    // increment is different for odd or even.
    angka % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (; i <= half; i += j) {
        if (angka % i === 0)
            //factor is found choosing which is minimum
            digitNum = Math.min(digitNum, calculateDigit(i, angka / i));
        //num % i === 0 ? str += ',' + i : false;
    }

    //str += ',' + num; // Always include the original number.
    return digitNum;
}

function calculateDigit(num1, num2) {
    return `${num1}${num2}`.length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
