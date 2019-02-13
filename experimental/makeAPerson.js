var Person = function (firstAndLast) {

    var fullName = firstAndLast;
    var arr = fullName.split(' ');

    this.getFirstName = x => arr[0];


    this.getLastName = x => arr[1];


    this.getFullName = x => fullName;


    this.setFirstName = function (first) {
        arr[0] = first;
        fullName = arr.join(' ');
    };

    this.setLastName = function (last) {
        arr[1] = last;
        fullName = arr.join(' ');
    };

    this.setFullName = function (firstAndLast) {
        fullName = firstAndLast;
        arr = fullName.split(' ');
    };
};

var bob = new Person('Bob Ross');

console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());


bob.setFirstName('Haskell');

console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());

bob.setLastName('Curry');

console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());