function binaryAgent(str) {
    console.log(String.fromCharCode(parseInt('01000001', 2)));

    return str.split(' ').map(x => String.fromCharCode(parseInt(x, 2))).join('');
}


console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// function truthCheck(collection, pre) {
//     // Is everyone being true?
//     let filter = obj => {
//         console.log(obj[pre]);
//         return obj[pre]
//     };
//     return collection.every(filter);
// }

function truthCheck(collection, pre) {
    // Is everyone being true?

    return collection.reduce((x, y) => x&&Boolean(y[pre]),true);
}

console.log(truthCheck([{
        "user": "Tinky-Winky",
        "sex": "male"
    },
    {
        "user": "Dipsy",
        "sex": "male"
    },
    {
        "user": "Laa-Laa",
        "sex": "female"
    },
    {
        "user": "Po",
        "sex": "female"
    }
], "sex"));
console.log('======');
console.log(truthCheck([{
        "user": "Tinky-Winky",
        "sex": "male"
    },
    {
        "user": "Dipsy"
    },
    {
        "user": "Laa-Laa",
        "sex": "female"
    },
    {
        "user": "Po",
        "sex": "female"
    }
], "sex"));