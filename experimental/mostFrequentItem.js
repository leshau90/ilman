/* 
======================================
Array Mastery: The Most Frequent Item
======================================

Nama:________

[INSTRUKSI]
Function mostFrequentItem adalah function yang menerima satu parameter berupa array of string.
Function akan menghitung setiap jumlah item di dalam array tersebut.
Function akan mereturn nilai berupa string dengan pola:

=> nama barang(3), nama barang kedua(5), nama barang ketiga(10).

Kemudian, setiap barang yang ditampilkan harus berurut jumlahnya dari yang terkecil ke terbesar.

[CONTOH]
input: ['asus', 'asus', 'samsung', 'iphone', 'iphone', 'asus', 'asus']));
output: 'samsung(1), iphone(2) , asus(4)'

*/

function mostFrequentItem(arr) {
    // Code hanya disini
    let counterObject = {};
    for (let i = 0; i < arr.length; i++) {
        if (!counterObject[arr[i]]) {
            counterObject[arr[i]] = 0
        }
        counterObject[arr[i]]++;
    }
    let sorterArray = [];
    //push to array
    for (k in counterObject) {
        sorterArray.push([k, counterObject[k]]);
    }
    //insertion-sort
    for (let i = 1; i < sorterArray.length; i++) {
        for (let j = i; j > 0 && sorterArray[j - 1][1] > sorterArray[j][1]; j--) {
            //the swap
            [sorterArray[j - 1], sorterArray[j]] = [sorterArray[j], sorterArray[j - 1]];
            //   console.log(t2);
        }
    }
    // console.log(t2);
    //stringifying and return
    let result = ''
    for (let i = 0; i < sorterArray.length; i++) {
        result += `${sorterArray[i][0]}(${sorterArray[i][1]}), `;
    }
    return result.slice(0, result.length - 2)
}




console.log(mostFrequentItem(['asus', 'asus', 'samsung', 'iphone', 'iphone', 'asus', 'asus'])); // 'samsung(1), iphone(2) , asus(4)'
console.log(mostFrequentItem(['9', 'b', 'b', 'c', '9', '9', 'b', '9', '2', '2'])); // 'c(1) , 2(2) ,b(3) ,9(4)'
console.log(mostFrequentItem(['book', 'laptop', 'iPod'])); // 'book(1), laptop(1), iPod(1)'