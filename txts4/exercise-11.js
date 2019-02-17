/*
    Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000      
     
     */

function shoppingTime(memberId, moneyx) {
    // you can only write your code here!
    if (memberId == undefined || memberId == '') return 'Mohon maaf, toko X hanya berlaku untuk member saja';

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
        result.listPurchased.push('Sepatu Stacattu')
    }

    if (money >= 500000) {
        result.changeMoney = money - 500000;
        money = money - 500000;
        result.listPurchased.push('Baju Zoro')
    }

    if (money >= 250000) {
        result.changeMoney = money - 250000;
        money = money - 250000;
        result.listPurchased.push('Baju H&N')
    }
    if (money >= 175000) {
        result.changeMoney = money - 175000;
        money = money - 175000;
        result.listPurchased.push('Sweeter Uniklooh')
    }

    if (money >= 50000) {
        result.changeMoney = money - 50000;
        money = money - 50000;
        result.listPurchased.push('Casing Handphone')
    }
    if (money == moneyx) {
        return 'mohon maaf uang tidak cukup';
    }
    return result;
}
// function shoppingTime(memberId, money) {
//     // you can only write your code here!


//     let order = new Object();
//     if (memberId == undefined || memberId == '') {
//         return 'Mohon maaf, toko X hanya berlaku untuk member saja';
//     }
//     if (money < 50000) {
//         return 'Mohon maaf, uang tidak cukup';
//     }
//     order.memberId = memberId;
//     order.money = money;
//     order.listPurchased = [];

//     let items = ['Sepatu Stacattu',
//         'Baju Zoro',
//         'Baju H&N',
//         'Sweater Uniklooh',
//         'Casing Handphone'
//     ]
//     let prices = [
//         1500000,
//         500000,
//         250000,
//         175000,
//         50000,
//     ];
//     for (let i = 0; i < prices.length; i++) {
//         if (money != 0) {
//             if(money>prices[i]){
//                 money=money-prices[i];
//                 order.listPurchased.push(items[i]);
//             }
//         }
//     }
//     order.changeMoney = money;
//     return order;
// }

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

console.log('========now, we\'ll be pushing object isntead a mere string============')

function shoppingTime(memberId, money) {
    // you can only write your code here!
    let order = new Object();
    if (memberId == undefined || memberId == '') {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup';
    }
    order.memberId = memberId;
    order.money = money;
    order.listPurchased = [];

    let items = ['Sepatu Stacattu',
        'Baju Zoro',
        'Baju H&N',
        'Sweater Uniklooh',
        'Casing Handphone'
    ]
    let prices = [
        1500000,
        500000,
        250000,
        175000,
        50000,
    ];
    for (let i = 0; i < prices.length; i++) {
        if (money != 0) {
            if (money >= prices[i]) {
                money = money - prices[i];
                order.listPurchased.push({name: items[i], price: prices[i]});
            }
        }
    }
    order.changeMoney = money;
    return order;
}



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