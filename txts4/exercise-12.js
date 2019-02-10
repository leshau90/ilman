function countProfit(shoppers) {
    // you can only write your code here!
    if(shoppers.length==0||shoppers == undefined ){ return [];}
    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];
    //creating placeholder
    let result = [];
    for (let i = 0; i < listBarang.length; i++) {
        let profit = new Object();
        profit.product = listBarang[i][0];
        profit.shoppers = []
        profit.leftOver = listBarang[i][2];
        profit.totalProfit = 0;
        result.push(profit);
    }


    for (let i = 0; i < shoppers.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (result[j].product == shoppers[i].product) {
                if (result[j].leftOver - shoppers[i].amount >= 0) {
                    result[j].leftOver-=shoppers[i].amount;
                    result[j].shoppers.push(shoppers[i].name);
                    result[j].totalProfit += shoppers[i].amount *listBarang[j][1];
                }
            }
        }
        // if(shoppers.product )
    }

    return result;


}

// TEST CASES

console.log(countProfit([{
        name: 'Windi',
        product: 'Sepatu Stacattu',
        amount: 2
    },
    {
        name: 'Vanessa',
        product: 'Sepatu Stacattu',
        amount: 3
    },
    {
        name: 'Rani',
        product: 'Sweater Uniklooh',
        amount: 2
    }
]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 8
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 10
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 1
}, {
    name: 'Devi',
    product: 'Baju Zoro',
    amount: 1
}, {
    name: 'Lisa',
    product: 'Baju Zoro',
    amount: 1
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Naiki',
    amount: 5
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]