/*
============
Cloud Jumper
============

[INSTRUCTIONS]
Cloud Jumper adalah sebuah permainan game yang temanya adalah melompati awan-awan dari titik awal ke titik terakhir untuk menyelesaikannya,
terdapat dua jenis awan, awan yang aman diwakili oleh value 0 dan awan dengan petir diwakili value 1,
pemain harus menghindari awan berpetir, minimal lompatan adalah 1 lompatan dan maksimal adalah 2 lompatan.
dengan kasus ini, temukan nilai minimum jumlah lompatan!

[EXAMPLE]
clouds = [0, 1, 0, 0 ,0, 1, 0]
terdapat 2 cara untuk menyelesaikan game diatas, yaitu:
idx-0 -> idx-2 -> idx-4 -> idx-6
      2         2        2
total: 3 lompatan
idx-0 -> idx-2 -> idx-3 -> idx-4 -> idx-6
      2         1        1       2
total: 4 lompatan

cara pertama membutuhkan 3 lompatan sedangkan cara ke dua membutuhkan 4 lompatan.
Maka hasilnya adalah 3 (karena paling sedikit 3).

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string &
  array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!
*/

function cloudJumper(clouds) {
    // your code here
    let i = 0,
        jumps = 0,
        max = clouds.length - 1;
    while (i < clouds.length) {
        let jumpAhead = i + 2;
        //states where to jumps is possible
        //first try jump of 2 

        if (clouds[i + 1] == undefined) {
            // console.log('its the end breaking');
            break;
        }

        if (clouds[jumpAhead] == 0) {

            jumps++;
            i = jumpAhead;
            // console.log('two jump away we find 0, it\'s valid jump, now jumps are :', jumps);
            continue;
            // continue;
        } else if (clouds[jumpAhead] == 1) {
            // console.log('if it\'s not 0 set the jump to 1 instead, now jumps are still :', jumps);
            jumpAhead = i + 1;
        } else {
            //it could be the end
            if (clouds[jumpAhead] == undefined) {
                //it could be 1 distance away not 2  to the last 0
                if (clouds[jumpAhead - 1] == 0) {
                    jumps++; //it's a valid jump with undefined at the end, so it should be the end
                    break;
                }
            }
            //it's the end
            else break;
        }
        //trying jump with distance of 1 instead 
        // console.log('trying jump with distance of 1 instead ');
        if (clouds[jumpAhead] == 0) {
            jumps++;
            i = jumpAhead;
            continue;
            // continue;
        } else if (clouds[jumpAhead] == 1) {
            //if it's still 1, there are too many clouds...breaking
            console.log('there are too many clouds...breaking');
            break;
        }
    }
    return jumps;



}

console.log(cloudJumper([0, 1, 0, 0, 0, 1, 0])); // 3
console.log(cloudJumper([0, 1, 0, 0, 1, 0, 0])); // 4

console.log(cloudJumper([0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0])); // 17

console.log(cloudJumper([0, 1, 0, 1, 0, 1, 0])); //3
console.log(cloudJumper([0, 0, 1, 1, 0, 1, 0])); //1