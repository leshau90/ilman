//exercise 9-1
var shoutOut = ()=>`Hello Function!`;
console.log(shoutOut())

//exercise 9-2
var num1 = 5;
var num2 = 6;

var calculateMultiply = (x,y)=>x*y;
var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); 

//exercise 9-3
var name = "Ralph";
var age = 20;
var address = "88 street, Avenue X, New York";
var hobby = "glass cleaning";

var processSentence = (name,age,address,hobby)=>`Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);