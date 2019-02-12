//freecodecamp, return sum of odd fibbonacci number, from series that is less than or equal to num
function sumFibs(num) {
    if (num == 1) return 1;
    if (num == 2) return 2;
    let [x, y, s] = [1, 1, 2];
    for (; y < num;) {

        [x, y] = [y, x + y];
        if (y % 2 == 1 && y < num) {
            // console.log('adding ===>', s, y);
            s += y;
        }
    }
    // console.log('last y', y);
    return (y == num) ? s + y : s;
}



console.log(sumFibs(75025));