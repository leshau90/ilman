function urutkanAbjad(str) {
    // you can only write your code here!

    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str.charCodeAt(i));
    }
    //console.log('before ===>', result);

    heapSort(result);

    // console.log('after ===>', result);
    return String.fromCharCode(...result);
}

function heap_root(input, i, array_length) {
    //console.log('process and swapping this part', input.slice(i, array_length));
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var maxParent = i;
    // console.log(' current root will be:',maxParent,'->',input[maxParent], ' left:',left,input[left],'right:',right,input[right]);
    //console.log(' max left right =>', [max, left, right]);
    //console.log('BEFORE root process' , input);
    if (left < array_length && input[left] > input[maxParent]) {
        // console.log('SET ROOT ',maxParent, 'to LEFT value ', left,'that is current root',input[maxParent], 'to ', input[left]);
        maxParent = left;

    }

    if (right < array_length && input[right] > input[maxParent]) {
        // console.log('SET ROOT',maxParent, ' to RIGHT value ', right, 'that is current root', input[maxParent] , 'to  ',input[right]);
        maxParent = right;

    }
    
    if (maxParent != i) {
        
        swap(input, i, maxParent);
        // console.log('RECURSION CALL from Heapify for ', [maxParent, array_length], input.slice(maxParent, array_length), 'because max != i', maxParent ,i);
        heap_root(input, maxParent, array_length);
    }
    //console.log('AFTER root process', input);
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];
    // console.log('SWAP >> the item at', index_A, input[index_A], 'with', index_B,input[index_B]);
    // console.log(input);
    input[index_A] = input[index_B];
    input[index_B] = temp;
    // console.log(input);
}

function heapSort(input) {

    let array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
        // console.log()
        // console.log('MAIN Iteration heapifying index:', i,'to: ', array_length, input.slice(i,array_length));
        heap_root(input, i, array_length);
        // console.log('MAIN Iteration heapifying AFTER:', i,'to: ',array_length, input.slice(i,array_length));
        
        
    }

    for (i = input.length - 1; i > 0; i--) {
        // console.log()
        // console.log('SECOND MAIN Iteration heapifying ', 0,array_length, input.slice(0,array_length));
        swap(input, 0, i);
        array_length--;
        heap_root(input, 0, array_length);
        // console.log('SECOND MAIN Iteration heapifying ', 0,array_length, input.slice(0,array_length));
    }
}







// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis'));
console.log(urutkanAbjad('abcdefghij'));
console.log(urutkanAbjad('jihgfedcba'));

console.log(urutkanAbjad('abc'));
