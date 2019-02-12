function translatePigLatin(str) {
    var check = /^[aiueo]/
    return str.match(check) ? `${str}way` :
        `${str.substring(str.search(/[aiueo]/))}${str.substring(0,str.search(/[aiueo]/))}ay`;
}

console.log(translatePigLatin("consonant"));

//replacing but preserving the case condition of 'before'
function myReplace(str, before, after) {

    if (before[0].match(/[A-Z]/)) {
        if (after[0].match(/[a-z]/)) {
            after = String.fromCharCode(after.charCodeAt(0) - 32) + after.substring(1)
        }
    }

    str = str.replace(before, after);
    console.log(str);
    return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));



function fearNotLetter(str) {
    let missing = str.charCodeAt(0);
    let result = str.split('')
        // .reduce((x, y) => x.charCodeAt(0) - y.charCodeAt(0) > 1 ? x : y,
        //     String.fromCharCode(str.charCodeAt(0) - 1));
        .reduce((x, y) => y.charCodeAt(0) - x.charCodeAt(0) > 1 ? x : y);
    return String.fromCharCode(result.charCodeAt(0) + 1);
    // return missing == 0 ? undefined : String.fromCharCode(missing);
}

console.log(fearNotLetter("abce"));


// so there's this set...wtf

function uniteUnique(arr) {

    //make an array out of arguments and flatten it (using the spread operator)
    const args = [].concat(...arguments);

    // create a Set
    return [...new Set(args)];
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//less space complexity but more confusing index etc.etc. by hand arrgh.....
