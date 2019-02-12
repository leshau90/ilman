function uniteUnique2() {

    let result = []
    console.log(arguments[1][0])
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            if (result.length == 0) {
                result.push(arguments[i][j]);
            }
            let found = false;
            for (let k = 0; k < result.length; k++) {
                if (arguments[i][j] == result[k]) {
                    found = true
                    break;
                }

            }
            if (!found) result.push(arguments[i][j]);
        }
    }

    // create a Set
    return result;
}
console.log(uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]));