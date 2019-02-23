function buildingSize(x) {
    let result = 0;
    let currentLowest = 0;
    console.log('input ->', x);
    for (let i = 0; i < x.length; i++) {
        if (x[i] > currentLowest) {
            // console.log('larger than lowest', currentLowest , 'the result' , result, 'will be added by',x[i]-currentLowest, 'while x[i] is', x[i]);
            result += (x[i] - currentLowest);
            // console.log('result is now', result);
        } else if (x[i] < currentLowest) {
            // console.log('smaller than lowest',currentLowest, 'the result',  result, 'will be added by',Math.abs(currentLowest-x[i])*(i+1), 'and this value ',x[i], 'will be the NEW low' );
            result += Math.abs(currentLowest - x[i]) * (i + 1);
            currentLowest = x[i];
            // console.log('result is now',result)
        } else continue;
    }
    result += (currentLowest < 0) ? Math.abs(currentLowest) : 0;
    drawTheBuilding(x, result);
    return result;
}

function drawTheBuilding(x, xl) {
    let max = Math.max(...x);
    let min = Math.min(...x);

    // console.log(max,min);
    let level = [];
    for (let i = 0; i < (x.length * 2) + 3; i++) {
        level.push(' ');

    }
    let result = [];
    result.push(level);
    //populating it down first
    for (let i = 0; i < Math.abs(min); i++) {
        result.push(level.slice())
    }
    //populating it up and saving relative 0 index of vertical axis
    let relativeZero = 0;
    for (let i = 0; i < max; i++) {
        result.unshift(level.slice());
        relativeZero++;
    }

    result[relativeZero][0] = '_';
    result[relativeZero][level.length - 1] = '_';

    // console.log(result);
    // result[relativeZero][11] = '_';

    for (let i = 0; i < x.length; i++) {
        let indexY = relativeZero + ((x[i] < 0) ? Math.abs(x[i]) : (-1) * x[i])
        let indexX = (i * 2) + 2;

        result[indexY]
            [indexX] = '_';

        let wallStart = (!x[i - 1]) ? relativeZero : relativeZero + ((x[i - 1] < 0) ? Math.abs(x[i - 1]) : (-1) * x[i - 1]);

        let wallEnd = indexY;
        if (wallStart > wallEnd)[wallStart, wallEnd] = [wallEnd, wallStart];
        // console.log('wall paint range ', wallStart, wallEnd);

        for (let h = wallStart; h < wallEnd; h++) {
            result[h + 1][indexX - 1] = '|';

        }
        // console.log('"_"->', relativeZero+Math.abs(x[i]),(i*2)+3 )
    }
    //last wall
    //let before
    let wallStart = relativeZero + ((x[x.length - 1] < 0) ? Math.abs(x[x.length - 1]) : (-1) * x[x.length - 1])
    let wallEnd = relativeZero;
    if (wallStart > wallEnd)[wallStart, wallEnd] = [wallEnd, wallStart];
    for (let h = wallStart; h < wallEnd; h++) {
        result[h + 1][level.length - 2] = '|';
    }

    // console.log(level.length)
    // console.log(relativeZero)
    // console.log(result)
    for (let h = 0; h < result.length; h++) {
        if (h == relativeZero) console.log(result[h].join('') + '\t', ' maka luasnya', xl);
        else
            console.log(result[h].join(''));
    }

}




console.log('------------------------------')
console.log(buildingSize([2, 5, 3, -2]));
console.log('------------------------------')
console.log(buildingSize([-1, 5, 5]));
console.log('------------------------------')
console.log(buildingSize([2, 5, 3, -2, 2]));
console.log('------------------------------')
console.log(buildingSize([-1, -2, 1, 2, 3, 4]));
console.log('------------------------------')
console.log(buildingSize([1,1,1]));
console.log('------------------------------')
console.log(buildingSize([-1,-1,-1]));