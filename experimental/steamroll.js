function steamrollArray(arr) {
    // Code disini

    let result = [];
    function dive(x) {
        for (let i = 0; i < x.length; i++) {
            if (!Array.isArray(x[i])) {
                result.push(x[i]);
            } else {
                dive(x[i]);
            }
        }
        
    }

    dive(arr);
    return result;
}




console.log(steamrollArray([[["a"]], [["b"]]]));