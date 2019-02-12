function whatIsInAName(collection, source) {
    // What's in a name?
    // var arr = [];
    // Only change code below this line
    let keySource = Object.keys(source);
    // arr = collection.filter(x => Object.keys(x).every(x => x in keySource) &&
    //     keySource.every(x => x));
    // Only change code above this line
    return collection.filter(collectionItem => keySource.every(sourceKey => collectionItem.hasOwnProperty(sourceKey) && collectionItem[sourceKey] === source[sourceKey]))
}


console.log(whatIsInAName([{
        "apple": 1
    }, {
        "apple": 1
    }, {
        "apple": 1,
        "bat": 2
    }],

    {
        "apple": 1
    }));
// [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]


console.log(whatIsInAName([{
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
}));