function calculate(str) {
    // console.log()
    // console.log('current input =>', str);

    // eval(str);
    if (str.length == 0) {
        console.log('base case');
        return 0;
    }

    // if (str[str.length-1] != '+' || str[str.length-1] != '*' || str[str.length-1] != '-') {
    //     console.log('base case');
    //     return ;
    // }

    let cutAt = 0;
    // console.log('NOT base case, finding where to cut');

    for (let i = str.length - 1; i > -1; i--) {

        if (str[i] == '+' || str[i] == '*' || str[i] == '-') {
            cutAt = i;
            break;
        }

    }

    // cutAt = (cutAt == 0) ? 0 : cutAt;
    // console.log('cutting at', cutAt);
    // let temp = str.slice((str[0] == '+' || str[0] == '*' || str[0] == '-') ? 1 : 0, cutAt);

    //slice and convert, slice is different according to whether the cutAt is still 0 or not
    let temp = str.slice((cutAt == 0) ? 0 : cutAt + 1, str.length);
    temp = parseInt(temp);
    // console.log('temp =>', temp, typeof temp)
    if (str[cutAt] == '+') {
        console.log('ADDITION of: ')
        console.log(temp, 'with result of:', str.slice(0, cutAt));
        temp += calculate(str.slice(0, cutAt));
        // console.log('temp => after', temp, 'recursive argument:', str.slice(0, cutAt));
    } else if (str[cutAt] == '*') {
        console.log('MULTIPLICATION of:');
        console.log(temp, 'with result of:', str.slice(0, cutAt));
        temp *= calculate(str.slice(0, cutAt));
        // console.log('temp => after', temp, 'recursive argument:', str.slice(0, cutAt));
    } else if (str[cutAt] == '-') {
        console.log('SUBTRACTION of:')
        console.log(temp, 'with result of:', str.slice(0, cutAt));
        //substraction isn't comutative
        temp = calculate(str.slice(0, cutAt)) - temp;

        // console.log('temp => after', temp, 'recursive argument:', str.slice(0, cutAt));
    } else {
        console.log('ELSE: last operand, do nothing')

        // temp =  calculate(str.slice(0, cutAt));
        // console.log('temp => after', temp);

    }

    // console.log('indexes:', str.indexOf('+'), str.indexOf('-'), str.indexOf('*'));
    // console.log('cutting at', cutAt);

    return temp;

}
// console.log(calculate('10')); //19982
console.log(calculate('123+234*56-10')); //19982
console.log(calculate('123+234')); //357
// console.log(eval('123+234*56-10'));