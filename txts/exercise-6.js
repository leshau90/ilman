//exercise 6-1
console.log('First LOOP');
var a = 2;
while (a <= 20) {
    console.log(`${a} - i love coding`);
    a += 2;
}
console.log('Second LOOP');
while (a > 0) {
    console.log(`${a} - I will become a full stack developer`);
    a -= 2;
}

//exercise 6-2
var index = 1;
for (; index <= 20; index++) {
    console.log(`${index} - i love coding`);

}
index--;
for (; index > 0; index--) {
    console.log(`${index} - I will become a full stack developer`);

}

//exercise 6-3 part 1-2
var index2 = 0;
for (; index2 <= 100; index2++) {
    if (index2 % 2 == 0) console.log(`${index2} adalah GENAP`);
    else console.log(`${index2} adalah GANJIL`);
}


//exercise 6-3 part 3-4

var index3 = 0;
for (; index3 <= 100; index3 += 2) {
    if (index3 % 3 == 0) console.log(`${index3} adalah kelipatan 3`);
}

index3 = 0;
for (; index3 <= 100; index3 += 5) {
    if (index3 % 6 == 0) console.log(`${index3} adalah kelipatan 6`);
}

index3 = 0;
for (; index3 <= 100; index3 += 9) {
    if (index3 % 10 == 0) console.log(`${index3} adalah kelipatan 10`);
}