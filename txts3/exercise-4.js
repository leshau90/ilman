   var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];


   function dataHandling2(input) {
      input.splice(1, 0, input.splice(1, 1)[0] + 'Elsharawy');
      input.splice(2, 0, 'Provinsi' + input.splice(2, 1)[0]);
      input.splice(4, 1, 'Pria');
      input.splice(5, 0, 'SMA Internasional Metro');
      console.log(input);

      let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
      let bul = '';
      let unsortedDate = input[3].split('/');
      let bulN = parseInt(unsortedDate[1]);
      
      switch (bulN) {
         case 1:
            bul = bulan[0];
            break;
         case 2:
            bul = bulan[1];
            break;
         case 3:
            bul = bulan[2];
            break;
         case 4:
            bul = bulan[3];
            break;
         case 5:
            bul = bulan[4];
            break;
         case 6:
            bul = bulan[5];
            break;
         case 7:
            bul = bulan[6];
            break;
         case 8:
            bul = bulan[7];
            break;
         case 9:
            bul = bulan[8];
            break;
         case 10:
            bul = bulan[9];
            break;
         case 11:
            bul = bulan[10];
            break;
         case 12:
            bul = bulan[11];
            break;

      }
      console.log(bul);
      console.log(unsortedDate.sort((x,y)=>parseInt(x)<parseInt(y)));
      console.log(input[3].split('/').join('-'));
      console.log(input[1].slice(0,15));

      

      return '';

   };


   console.log(dataHandling2(input));