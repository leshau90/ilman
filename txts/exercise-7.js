//exercise 7-1
var idx =  5;
for (; idx > 0; idx--) {
    console.log('*');    
}
//exercise 7-2

idx =  5;
var max= idx;

for (; idx > 0; idx--) {
    let  [u,star ]= [0,''];
    while (u<max){
        star+='*';
        u++;
    }
    console.log(star);    
}

//exercise 7-3
idx =  5;
var max2= 0;

for (; max2<idx; max2++) {
    let  [u,star ]= [0,''];
    while (u<max2+1){
        star+='*';
        u++;
    }
    console.log(star);    
}
