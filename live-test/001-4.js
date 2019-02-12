function poinCalculator(array) {
    // your code he   re
    // for (let i = 1; i < array.length; i++) {
    //     for (let j = i - 1; j != 0 && array[j - 1] > array[j]; j--) {
    //         [array[j], array[j - 1]] = [array[j - 1], array[j]];
    //     }

    // }
    var [g, s, b] = [0, 0, 0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'G') {
            // console.log('the arr i is', array[i]);
            g++;
            // console.log(g);
        } else if (array[i] === 'S') {
            s++;
        } else if (array[i] === 'B') {
            b++;
        } else continue;
    }

    return ` jumlah Gold: ${g}, jumlah Silver: ${s}, jumlah Bronze: ${b}. Dan totalnya adalah: ${g*2 + s +b*0.5}`

}

console.log(poinCalculator("GSB"));
// jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
console.log(poinCalculator("GGG"));
// jumlah Gold: 3, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 6
console.log(poinCalculator("SSB"));
// jumlah Gold: 0, jumlah Silver: 2, jumlah Bronze: 1. Dan totalnya adalah: 2.5
console.log(poinCalculator("BBGSSGB"));
// jumlah Gold: 2, jumlah Silver: 2, jumlah Bronze: 3. Dan totalnya adalah: 7.5
console.log(poinCalculator(""));
// jumlah Gold: 0, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 0