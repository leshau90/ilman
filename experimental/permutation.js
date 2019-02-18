// function perm(inputArray) {
//     let result = [];

//     for (let i = 0; i < inputArray.length; i = i + 1) {
//         let rest = perm(inputArray.slice(0, i).concat(inputArray.slice(i + 1)));

//         if (!rest.length) {
//             result.push([inputArray[i]])
//         } else {
//             for (let j = 0; j < rest.length; j = j + 1) {
//                 result.push([inputArray[i]].concat(rest[j]))
//             }
//         }
//     }
//     return result;
// }

// console.log(perm([1, 2, 3, 4]));

var swap = function (array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
};

var heapsPermute = function (array, output, n) {
    n = n || array.length; // shortcircuit deafult-ing to array length, in case n is undefined
    if (n === 1) {
        output(array);
    } else {
        for (var i = 1; i <= n; i += 1) {
            heapsPermute(array, output, n - 1);
            if (n % 2) {
                var j = 1;
            } else {
                var j = i;
            }
            swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
        }
    }
};


// For testing:
var print = function (input) {
    console.log(input);
}

heapsPermute(['a', 'b', 'c', 'd'], print);