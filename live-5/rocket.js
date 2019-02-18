/*
=================
generate calendar
=================

[INSTRUCTION]
buatlah sebuah program yang dapat mengenerate calendar dalam 1 bulan. dengan 2 parameter yaitu:
- dayName, yaitu nama hari yang ada dalam seminggu.
nama  hari ini dijadikan hari yang ada di tanggal 1 dalam bulan itu, 
- dayCount , yaitu jumlah tanggal yang ada pada bulan itu

[EXAMPLE]
- dayName : "monday", // hari dimulainya tanggal 1 
- dayCount : 30

maka outputnya adalah 
{
  "sunday"  :['', 7, 14, 21, 28],
  "monday"  :[1 , 8, 15, 22, 29], // tanggal 1 dimulai dari monday
  "tuesday" :[2 , 9, 16, 23, 30],
  "wenesday":[3 ,10, 17, 24, ''],
  "thursday":[4 ,11, 18, 25, ''],
  "friday"  :[5 ,12, 19, 26, ''],
  "saturday":[6 ,13, 20, 27, '']
}
*/

function generateCalendar(dayName, dayCount) {
  // your code here 
  let result = {
    "sunday": [],
    "monday": [],
    "tuesday": [],
    "wednesday": [],
    "thursday": [],
    "friday": [],
    "saturday": []
  }

  let map = {
    "sunday": "monday",
    "monday": 'tuesday',
    "tuesday": 'wednesday',
    "wednesday": 'thursday',
    "thursday": 'friday',
    "friday": 'saturday',
    "saturday": 'sunday'
  }
  // console.log(result);
  let day = dayName
  let maxLength = 0;
  for (let i = 1; i <= dayCount; i++) {
    result[day].push(i);
    if (result[day].length > maxLength) maxLength = result[day].length;
    day = map[day];
  }


//empty at first`
  for (day = 'sunday'; day != dayName; day = map[day]) {
    // console.log(day);

    result[day].unshift('');
    if (result[day].length > maxLength) maxLength = result[day].length;

  }
  //empty at the end` ....just like my heart
  day='sunday';

  for (let i = 0; i < 7; i++) {

    if (result[day].length < maxLength) {
      // console.log(day, 'is less than max which is', maxLength)
      result[day].push('')

    };
    day=map[day];
  }
  // console.log(maxLength);
  return result;

}



console.log(generateCalendar("friday", 25))
console.log(generateCalendar("saturday", 7))
console.log(generateCalendar("sunday", 18))
console.log(generateCalendar("monday", 53))
console.log(generateCalendar("tuesday", 3))
console.log(generateCalendar("wednesday", 100))
console.log('===============================')
console.log(generateCalendar("thursday", 31))
/*
{
  "sunday"  :['', 4, 11, 18, 25],
  "monday"  :['', 5, 12, 19, 26], 
  "tuesday" :['', 6, 13, 20, 27],
  "wenesday":['', 7, 14, 21, 28],
  "thursday":[1 , 8, 15, 29, ''],
  "friday"  :[2 , 9, 16, 30, ''],
  "saturday":[3 , 10,17, 31, '']
}
*/