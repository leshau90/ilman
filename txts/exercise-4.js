var tanggal='';
var bulan='';
var tahun='';

function excercise4(tanggal, bulan, tahun) {
    switch (bulan) {
        case '1':
            return `${tanggal} Januari ${tahun}`;
            break;
        case '2':
            return `${tanggal} Februari ${tahun}`;
            break;
        case '3':
            return `${tanggal} Maret ${tahun}`;
            break;
        case '4':
            return `${tanggal} April ${tahun}`;
            break;
        case '5':
            return `${tanggal} Mei ${tahun}`;
            break;
        case '6':
            return `${tanggal} Juni ${tahun}`;
            break;
        case '7':
            return `${tanggal} Juli ${tahun}`;
            break;
        case '8':
            return `${tanggal} Agustus ${tahun}`;
            break;
        case '9':
            return `${tanggal} September ${tahun}`;
            break;
        case '10':
            return `${tanggal} Oktober ${tahun}`;
            break;
        case '11':
            return `${tanggal} November ${tahun}`;
            break;
        case '12':
            return `${tanggal} Desember ${tahun}`;
            break;
        default:
            return 'please write the correct number for the month';
    }
}

console.log(excercise4(tanggal,bulan,tahun));