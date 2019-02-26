function buildingSize(x) {
    let result = 0;
    let previous = 0;
    console.log('input ->', x);
    // let explanation = '';
    for (let i = 0; i < x.length; i++) {
        // explanation += `(${result})<= ${1 + Math.abs(x[i]-previous)}<= 1 + abs(${x[i]} - ${previous}) \n`;
        result += 1 + Math.abs(x[i] - previous);
        previous = x[i];
    }
    
    // explanation += `(${result})<= ${2 + Math.abs(0-previous)}<= 2 + abs(${0} - ${previous}) \n`;
    result += 2 + Math.abs(0 - previous);
    drawTheBuilding(x, result);
    // console.log(explanation);
    // drawTheBuilding2(x, result);
    return result;
}

function drawTheBuilding(x, xl) {
    let max = Math.max(...x);
    let min = Math.min(...x);
    if (min >= 0) min = 0;
    // console.log(labelWidth);

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

    //printing counts

    // console.log(result)

    for (let h = 0; h < result.length; h++) {
        if (h == relativeZero) console.log(result[h].join('') + '\t', ' maka luasnya', xl);
        else
            console.log(result[h].join(''));
    }

}





console.log()
console.log(buildingSize([2, 5, 3, -2]));
console.log()
console.log(buildingSize([-1, 5, 5]));
console.log()
console.log(buildingSize([2, 5, 3, -2, 2]));
console.log()
console.log(buildingSize([-1, -2, 1, 2, 3, 4]));
console.log()
console.log(buildingSize([2, 5, 3, -2,5,-10,8]));
console.log()
console.log(buildingSize([1, 1, 1]));
console.log()
console.log(buildingSize([-1, -1, -1]));
console.log()
console.log(buildingSize([0, 0, 0, 0]));