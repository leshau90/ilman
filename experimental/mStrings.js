String.prototype.toJadenCase = function () {
    //...
    // console.log(this.length);
    // let u = (this+"").split(' ');
    let u = '';
    let expectFirst = false;
    for (let i = 0; i < this.length; i++) {
        console.log('CODE :', this.charCodeAt(i));
        if (i == 0 && this[i].charCodeAt(0) >= 97 && this[i].charCodeAt(0) <= 122) {
            console.log('convert', String.fromCharCode(this[i].charCodeAt(0) - 32));
            u += String.fromCharCode(this[i].charCodeAt(0) - 32);
        } else if (this[i] == ' ') {
            u += this[i];
            expectFirst = true;
            console.log('flag setting because of space', expectFirst)
        } else if (expectFirst) {

            if (this[i].charCodeAt(0) >= 97 && this[i].charCodeAt(0) <= 122) {
                //it's a valid lowercase 
                console.log('convert', String.fromCharCode(this[i].charCodeAt(0) - 32));
                u += String.fromCharCode(this[i].charCodeAt(0) - 32);
                expectFirst = false;
            } else {
                //it's a strange character that is not lowercase, or it's already uppercase
                console.log('no convert', this[i].charCodeAt(0));
                u += this[i];
                expectFirst = false;
            }
        } else
            //by default just add 
            u += this[i];
    }
    console.log(u);
    // return (this+"").split(' ');
    return u;
};


console.log(typeof 'goes with wind'.toJadenCase())
console.log('goes with wind'.toJadenCase())