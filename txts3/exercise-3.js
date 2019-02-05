// var input = ['ilman'];

var input = [
   ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
   ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
   ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
   ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
   ["0005", "Ilman", "Kendari", "11/1/1990", "Berkebun"]
]

function dataHandling(arr) {
   var result='';
   for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
         switch (j) {
            case 0:
               result+=`Nomor ID\t: ${arr[i][j]}\n`;
               break;
            case 1:
               result+=`Nama Lengkap\t: ${arr[i][j]}\n`;
               break;
            case 2:
               result+=`TTL\t\t: ${arr[i][j]} ${arr[i][j+1]}\n`;
               break;
            case 3:
               break;
            case 4:
               result+=`Hobi\t\t: ${arr[i][j]}\n`;
               break;
            default:
               result+=`unknown\t\t: ${arr[i][j]}\n`;
         }
      }
      result+='\n';
   }
   return result;
}
console.log(dataHandling(input));