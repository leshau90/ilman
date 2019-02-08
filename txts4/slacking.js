function bootPairCount(str) {
    //it uses associative array
    if (str == undefined || str == '') return 'Tidak ada sepatu boot mohon periksa input anda';
    let bootCounts = [];
    let result = 0;

    for (let i = 0; str.length > i; i++) {
        if (bootCounts[`${str[i]}`] == undefined) {
            bootCounts[`${str[i]}`] = 1;
        } else bootCounts[`${str[i]}`]++;
        //console.log('there are: ', multipleCount[`${str[i]}`], ` of ${str[i]} `);
        // console.log(bootCounts);
    }

    for (var j in bootCounts) {
        //multipleCount[j];
        result += Math.floor(bootCounts[j] / 2);
        //console.log(Math.floor(multipleCount[j]/2));
    }

    return (result == 0) ? 'Tidak ada pasangan sepatu boot ditemukan' : result;
}



console.log(bootPairCount('ABBAACDAB')); //3
console.log(bootPairCount('ABBCCDAD')); //4
//console.log(bootPairCount('ABBCCDADXXZZ'));
console.log(bootPairCount('ABCDE'));
//console.log(bootPairCount('ABCDEFGHIJKLMNOPqrstu'));
console.log(bootPairCount());