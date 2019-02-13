function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    let resultC = x => {
        // console.log(x);
        // console.log(x.avgAlt, 2*Math.PI*Math.sqrt(Math.pow(x.avgAlt + earthRadius,3)/GM ));
        return {
            name: x.name,
            orbitalPeriod: Math.round(
                Math.sqrt(
                    Math.pow(x.avgAlt + earthRadius, 3) / GM) *
                (Math.PI * 2))
        }
    };
    let result = arr.map(resultC);
    result.forEach(element => {
        console.log(element);
    });
    return result;
}

console.log(orbitalPeriod([{
    name: "sputnik",
    avgAlt: 35873.5553
}]));