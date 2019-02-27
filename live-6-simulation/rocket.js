/*
	sebuah function arrayPanjangGanjil menerima array yang berisi string
	function ini akan mengembalikan array yang berisi data yang hanya memiliki
  jumlah karakter bernilai ganjil.

	Note:
	Wajib menggunakan metode recursive

	Contoh
	console.log(arrayPanjangGanjil(['satu', 'dua', 'tiga', 'empat']));

	Hasil
	['dua', 'empat']
*/


function arrayPanjangGanjil(datas) {
	//your code here
	//body check
	// console.log(datas);
	// let allOdd = true;
	data = []

	// for (let i = 0; i < datas.length; i++) {
	// 	if (datas[0].length % 2 == 0){
	// 		allOdd=false;
	// 	}		
	// }
	// if (!allOdd) return datas;
	if (datas.length == 0)
			return [];
	if (datas[0].length % 2 == 1) {
		// console.log('=>',datas[0])
		data.push(datas[0])
		// datas.splice(0,0, arrayPanjangGanjil(datas.slice(1)));
	}
	
	// console.log(data)
	
	
	return data.concat(arrayPanjangGanjil(datas.slice(1)));

}


console.log(arrayPanjangGanjil(['satu', 'dua', 'tiga', 'empat'])); // ['dua', 'empat']

console.log(arrayPanjangGanjil(['banyak', 'jalan', 'menuju', 'roma'])) // [ 'jalan' ]

console.log(arrayPanjangGanjil(['Hab', 'geduld', 'alle', 'dinge', 'sind', 'schwierig', 'bevor', 'sie', 'leicht', 'werden'])) // [ 'Hab', 'dinge', 'schwierig', 'bevor', 'sie' ]