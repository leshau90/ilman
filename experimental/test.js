var data = {a:'x',b:'y',c:'d',d:undefined};
data.e = undefined;



var data2 = [1,2,3,4,5,6];
data2['gender'] = 'male';
data2['genderx'] = undefined;

console.log(data2['gender']);
console.log(data2);
for (const key in data) {
    console.log(key);
}


// for (const key of data2) {
//     console.log(key);
// }


// for (const key in data2) {
//     console.log(key);
// }

