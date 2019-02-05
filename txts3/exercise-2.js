function balikString(kata) {
    let [result, i] = ['', kata.length-1];
    for (; i >=0; i--) {
       result+=kata[i];
    }
    return result;
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(balikString('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikString('John Doe')); // eoD nhoJ
  console.log(balikString('I am a bookworm')); // mrowkoob a ma I
  console.log(balikString('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikString('Super')); // repuS