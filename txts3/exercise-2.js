function balikString(kata) {
    let [result, i] = ['', kata.length-1];
    for (; i >=0; i--) {
       result+=kata[i];
    }
    return result;
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(balikString('hello world!'));