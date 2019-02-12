var module = {
    x: 42,
    getX: function () {
        return this.x;
    }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

//new array containing elements that are not in either 

function diffArray(arr1, arr2) {
    var newArr = [];

    function onlyInFirst(first, second) {
        // Looping through an array to find elements that don't exist in another array
        for (var i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                // Pushing the elements unique to first to newArr
                newArr.push(first[i]);
            }
        }
    }

    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


function diffArray2(arr1, arr2) {
    var newArr = [];
    var tracker = [...arr2];
    let both = false;


    for (let i = 0; i < arr1.length; i++) {
        let j = 0;
        for (; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                both = true;
                break;
            }
        }
        if (!both) newArr.push(arr1[i]);
        both = false;
    }
    for (let i = 0; i < arr2.length; i++) {
        let j = 0;
        for (; j < arr1.length; j++) {
            if (arr1[i] == arr2[j]) {
                both = true;
                break;
            }
        }
        if (!both) newArr.push(arr2[i]);
        both = false;
    }

    return newArr;
}
console.log('---------');

console.log(diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//destroyer form freecodecamp

function destroyer(arr) {
    // Remove all the values
    //filtering first argument, and slicing part of arguments as array, to be checked against
    return arguments[0].filter(x => ![...arguments].slice(1, arguments.length).includes(x));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//return filtered objects

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    Object.keys(source);

    // Only change code above this line
    return arr;
}

whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
});


/* 
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
{ last: "Capulet" }) 
should return [{ first: "Tybalt", last: "Capulet" }]

*/