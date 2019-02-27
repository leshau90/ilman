/*
=====================
PLAT NOMOR VALIDATOR
=====================

[INSTRUCTIONS]
Terdapat sebuah function dengan nama platNomorValidator yang menerima sebuah parameter berupa array of string.
Kegunaan dari function tersebut adalah untuk me validasi daftar plat nomor yang diberikan

adapun cara pemeriksaannya:
- 4 angka terakhir pada plat yang diberikan adalah tanggal masa berlaku plat nomor 
- Jika plat nomor valid maka plat nomor akan di tambahkan ke array output 

Adapun kondisi tidak valid:
- 'MASA BERLAKU SUDAH HABIS'
menandakan bahwa masa berlaku sudah lewat dari bulan saat ini ( februari 2019 )
- 'PLAT NOMOR TIDAK BOLEH SAMA'
menandakan bahwa ada plat yang memiliki nomor yang sama (duplikat) dengan yang ada di output
- 'BULAN TIDAK VALID'
menandakan bahwa bulan tidak valid (ex: B 1343 KJ 1819, karena memiliki bulan 18)
- 'PANJANG PLAT TIDAK VALID'
menandakan bahwa panjang plat kurang dari 9 ('P X JK' memiliki length 6, spasi termasuk)

[EXAMPLES]
Contoh 1
input : ['B 1042 PJ 0819', 'P 5739 PO 1223', 'B 5731 AK 0718', 'B 6666 AJ 0119', 'P 5739 PO 0221']
output : ['B 1042 PJ', 'P 5739 PO', 'MASA BERLAKU SUDAH HABIS', 'MASA BERLAKU SUDAH HABIS', 'PLAT NOMOR TIDAK BOLEH SAMA']

Contoh 2
input: ['B 1343 KJ 1819', 'P 4444 XO 1223', 'P X JK 1223', 'B 1234 AA 0215', 'B 1234 AA 0319']
output : ['BULAN TIDAK VALID', 'P 4444 XO', 'PANJANG PLAT TIDAK VALID', 'MASA BERLAKU SUDAH HABIS', 'B 1234 AA' ]

[RULES]
- HANYA boleh menggunakan push
- DILARANG menggunakan method REGEX
*/

function platNomorValidator(arr) {
  // your code here
  let d = new Date();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].split(' ');
    let bulan = parseInt(temp[3].slice(0, 2));
    let tahun = parseInt('20' + temp[3].slice(2));
    // console.log(tahun);
    if (temp[0].length + temp[1].length + temp[2].length + 2 < 9) {
      result.push('PANJANG PLAT TIDAK VALID');
    } else if (bulan > 12) {
      result.push('BULAN TIDAK VALID');
    } else if (d.getFullYear() > tahun) {
      result.push('MASA BERLAKU SUDAH HABIS');
    } else if (d.getFullYear() == tahun && (d.getMonth() + 1) > bulan) {
      result.push('MASA BERLAKU SUDAH HABIS');
    } else {
      result.push(temp[0] + ' ' + temp[1] + ' ' + temp[2]);
    }
  }
  for (let index = arr.length - 1; index >= 1; index--) {
    let a = arr[index].slice(0,9);
    for (let index2 = index - 1; index2 >= 0; index2--) {
      let b = arr[index2].slice(0,9);
      console.log (a,b);
      if (a===b){
        result[index] =  'PLAT NOMOR TIDAK BOLEH SAMA';
        if(result[index2] !== a){
          result[index] =  a;
        }
        break;
      }
    }
  }


  return result;
}

console.log(platNomorValidator(['B 1042 PJ 0819', 'P 5739 PO 0219', 'B 5731 AK 0718', 'B 6666 AJ 0119', 'P 5739 PO 1223']))
// ['B 1042 PJ', 'P 5739 PO', 'MASA BERLAKU SUDAH HABIS', 'MASA BERLAKU SUDAH HABIS', 'PLAT NOMOR TIDAK BOLEH SAMA']

console.log(platNomorValidator(['B 1343 KJ 1819', 'P 4444 XO 1223', 'P X JK 1223', 'B 1234 AA 0215', 'B 1234 AA 0319']))
// ['BULAN TIDAK VALID', 'P 4444 XO', 'PANJANG PLAT TIDAK VALID', 'MASA BERLAKU SUDAH HABIS', 'B 1234 AA']