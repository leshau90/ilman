function addTogether() {
    if (typeof arguments[0] !== 'number') return undefined;
    
    var x = arguments[0];
    if (arguments.length == 1) return function (n) {
        if (typeof n !== 'number') return undefined;
        else return n + x;
    };
    
    if (typeof arguments[1] !== 'number') return undefined;
    return arguments[1] + arguments[0];
}

function addTx(x){
    return function(j){
        return x+j;
    }
}
console.log(addTogether(2, 3));
console.log(addTx(2)(3) );
console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt"));

console.log(typeof 'xx');