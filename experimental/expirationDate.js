// cek label sudah atau belum expired
// EXP 0320 artinya expired pada bulan 3 tahun 2020
function isExpired(str) {
    let d = new Date();
    let productYear = parseInt('20' + str.slice(6));
    let productMonth = parseInt(str.slice(4, 6));
    // console.log(productMonth, productYear, '<>', d.getMonth() + 1, d.getFullYear())
    if (productYear > d.getFullYear()) {
        return false;
    } else if (productYear == d.getFullYear()) {
        // console.log('same year', productMonth, d.getMonth() + 1)
        if (productMonth >= d.getMonth() + 1) return false;

        else return true;
    } else return true;
}


console.log(isExpired("EXP 0419")); // false
console.log(isExpired("EXP 0818")); // true
console.log(isExpired("EXP 0820")); // false
console.log(isExpired("EXP 0119"));