function changeMe(arr) {
    // you can only write your code here!
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]}`);
        let p = new Object();
        p.firstName = arr[i][0];
        p.lastName = arr[i][1];
        p.gender = arr[i][2];
        p.age = arr[i][3] == undefined ? 'Invalid Birth Year' : new Date().getFullYear() - parseInt(arr[i][3]);
        console.log(p);
    }
}

// TEST CASE
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""