function checkAB(num) {
    // you can only write your code here!
    for (let i = 0; i < num.length; i++) {
        // console.log(num[i], num[i+4]);
        if ((num[i] == 'a' && num[i + 4] == 'b') || (num[i] == 'b' && num[i + 4] == 'a')) {
            return true;
        }
    }
    return false;

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false


console.log('==============')


function shoppingTime(memberId, moneyx) {
    // you can only write your code here!
    if (memberId == undefined || memberId == '') return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    //     'Sepatu Stacattu':
    //     //    'Baju Zoro',
    //     //    'Baju H&N',
    //     //    'Sweater Uniklooh',
    //     //    'Casing Handphone'
    //     Sepatu brand Stacattu seharga 1500000
    // Baju brand Zoro seharga 500000
    // Baju brand H&N seharga 250000
    // Sweater brand Uniklooh seharga 175000
    // Casing Handphone seharga 50000
    let money = moneyx;
    let result = {
        memberId: memberId,
        money: money,
        listPurchased: [],
        changeMoney: 0
    }

    if (money >= 1500000) {
        result.changeMoney = money - 1500000;
        money = money - 1500000;
        result.listPurchased.push('sepatu stacattu')
    }

    if (money >= 500000) {
        result.changeMoney = money - 500000;
        money = money - 500000;
        result.listPurchased.push('baju zoro')
    }

    if (money >= 250000) {
        result.changeMoney = money - 250000;
        money = money - 250000;
        result.listPurchased.push('baju h&n')
    }
    if (money >= 175000) {
        result.changeMoney = money - 175000;
        money = money - 175000;
        result.listPurchased.push('sweeter Uniklooh')
    }

    if (money >= 50000) {
        result.changeMoney = money - 50000;
        money = money - 50000;
        result.listPurchased.push('casing handphone')
    }
    if (money == moneyx) {
        return 'mohon maaf uang tidak cukup';
    }
    return result;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

console.log('====================')

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if (arrPenumpang.length == 0 || arrPenumpang == undefined) return [];
    let result = [];
    for (let i = 0; i < arrPenumpang.length; i++) {
        result.push({
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            tariff: ((arrPenumpang[i][2].charCodeAt(0) - arrPenumpang[i][1].charCodeAt(0)) * 2000)
        })



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

console.log(naikAngkot([]));

function highestScore(students) {
    // Code disini
    console.log('======')
    let result = {};
    for (let i = 0; i < students.length; i++) {
        if (!result[students[i].class]) {
            result[students[i].class] = {
                name: students[i].name,
                score: students[i].score
            };
        }
        // console.log(result);
        if (students[i].score > result[students[i].class]) {
            result[students[i].class] = {
                name: students[i].name,
                score: students[i].score
            }
        }

    }
    return result;

}

// TEST CASE
console.log(highestScore([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}


console.log('============')



function graduates(students) {
    // Code disini
    let result={};
    for (let i = 0; i < students.length; i++) {
        if (!result[students[i].class]){
            result[students[i].class] = [];
        }
        if (students[i].score>75){
            result[students[i].class].push({
                name: students[i].name,
                score: students[i].score

            });
        }

    }
    return result;
}

console.log(graduates([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}