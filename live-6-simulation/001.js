/*
===================
Catch Me if You Can
===================

[INSTRUCTIONS]
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.

Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan

Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
Contoh
-------
1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
   output: Nice work, detective! You got all villains: 2
2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
   output: Ooops, you die. You got 3 villains
3. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
   output: Ooops, you die. You got 2 villains
*/

// Algoritma / Pseudocode here..
/*
SET variable 'i' to  0
SET variable 'life' to 3
SET variable 'villain' to 0
WHILE i less than length of input array
    IF 'life' is  0
        SET variable 'i' to 'i' + input array length // or BREAK 
    IF element at the index of 'i' equals @
        SET variable 'life' to 'life'-1
    IF element at the index of 'i' equals villain
        SET variable 'villain' to 'life'+1

IF  (life equals 0) 
    DISPLAY   Ooops, you die. You got 'villain' villains

ELSE 
    DISPLAY   Nice work, detective! You got all villains: 'villain'
*/