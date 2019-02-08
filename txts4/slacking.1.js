function squareNumber(num) {
    //it uses associative array
    if (num < 3 || num == undefined) return false;
    var result = [];
    var i = 0;
    var horizontalIndex = num-1;
    var end = num * num;
    while (i < num) {
        result.push([]);
        i++;
    }
    i = 1;
    while (i < end + 1) {
        if (i!=1 && i%num==1) horizontalIndex--;

        if (horizontalIndex % 2 == (num%2)) {
            result[horizontalIndex].unshift(i);
        } else {
            result[horizontalIndex].push(i);
            
        }
        i++;
    }
    return result;
}



console.log(squareNumber(3));
console.log(squareNumber(4));
console.log(squareNumber(5));
console.log(squareNumber(6));