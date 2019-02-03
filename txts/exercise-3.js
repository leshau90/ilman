var name = 'ilman';
var peran = 'singa';

function excercise3(name, peran) {
    if (!name)
        return 'nama harus diisi';
    else if (!peran)
        return `halo ${name}, pilih peranmu dalam game`;
    else if (peran.toLowerCase() === 'kesatria')
        return ` Selamat datang di dunia proxytia, ${name}
        halo ${peran} ${name}, kamu dapat menyerang dengan senjatamu`;
    else if (peran.toLowerCase() === 'tabib')
        return ` Selamat datang di dunia proxytia, ${name}
        halo ${peran} ${name}, kamu akan membantu temanmu yang terluka`;
    else if (peran.toLowerCase() === 'penyihir')
        return ` Selamat datang di dunia proxytia, ${name}
        halo ${peran} ${name}, ciptakan keajaiban yang membantu kemenanganmu`;
    else
        return ` Selamat datang di dunia proxytia, ${name}
        hmm..  ${name} ternyata kamu suka berperan sebagai ${peran}....
        tidak apalah, karena hidupmu adalah pilihanmu`;
}
console.log(excercise3(name, peran));