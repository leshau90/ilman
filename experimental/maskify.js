// return masked string
function maskify(cc) {
    if (cc.length <= 4) return cc;
    
    

    // console.log(i)
    return '#'.repeat(cc.length-4)+cc.slice(-4);
}


console.log(maskify('4556364607935616'));
console.log(maskify('1'));
console.log(maskify('11111'));

function dox( n){

    return `${n}`.split('').sort((a,b)=>parseInt(a)<parseInt(b)).join('');

}

console.log(dox(999283184));