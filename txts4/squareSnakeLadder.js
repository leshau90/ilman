//with no unshift
function squareNumber(num) {
    //square numbered array of arrays , snake-ladder like

    if (num < 3 || num == undefined) return false;
    var result = [];
    var i = 0;
    var horizontalIndex = num - 1;
    var end = num * num;
    while (i < num) {
        result.push(new Array(num));
        i++;
    }
    i = 1;
    while (i < end + 1) {
        //different direction for every horizontal index
        if (i != 1 ) horizontalIndex--;

        //and the direction of filling is affected by whether horizontal index is odd or even  and also by the input number is it odd or even 
        if (horizontalIndex % 2 == (num % 2)) {
            //from right to left
            for (let u = result[horizontalIndex].length - 1; u >= 0; u--) {

                result[horizontalIndex][u] = i++;
            }

        } else {
            //from left to right
            for (let u = 0; u < result[horizontalIndex].length; u++) {

                result[horizontalIndex][u] = i++;
            }

            // result[horizontalIndex].push(i);

        }
        // i++;
    }
    return result;
}


console.log(squareNumber(3));
console.log(squareNumber(4));
console.log(squareNumber(5));

console.log(squareNumber(10));


// function squareNumber(num) {
//     //square numbered array of arrays , snake-ladder like

//     if (num < 3 || num == undefined) return false;
//     var result = [];
//     var i = 0;
//     var horizontalIndex = num-1;
//     var end = num * num;
//     while (i < num) {
//         result.push([]);
//         i++;
//     }
//     i = 1;
//     while (i < end + 1) {
//         //different direction for every horizontal index
//         if (i!=1 && i%num==1) horizontalIndex--;

//         //and the direction of filling is affected by whether horizontal index is odd or even  and also by the input number isit odd or even 
//         if (horizontalIndex % 2 == (num%2)) {

//             result[horizontalIndex].unshift(i);
//         } else {
//             result[horizontalIndex].push(i);

//         }
//         i++;
//     }
//     return result;
// }