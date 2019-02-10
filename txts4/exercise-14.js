function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let result = [];
    if (arrPenumpang.length == 0 || arrPenumpang == undefined) return [];
    for (let i = 0; i < arrPenumpang.length; i++) {
        result.push(new Object());
        result[i].penumpang = arrPenumpang[i][0];
        result[i].naikDari = arrPenumpang[i][1];
        result[i].tujuan = arrPenumpang[i][2];
        result[i].bayar = 0;
    }
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < rute.length; j++) {
            if (rute[j] === result[i].naikDari) {
                for (let k = j + 1; k < rute.length; k++) {
                    if (!(rute[k] === result[i].tujuan)) {
                        //console.log('adding without breaking');
                        result[i].bayar += 2000;
                    } else {
                        result[i].bayar += 2000;
                        break;
                    }
                }
            }
        }
    }
    return result;
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]