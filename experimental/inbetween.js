//minimal common of multiplication result between two values
function smallestCommons(arr) {
  if (arr[0] == arr[1]) return arr[1];
  if (Math.abs(arr[0] - arr[1]) == 1) return smallestCommonsR([arr[arr.length - 2], arr[arr.length - 1]]);
  let [min, max] = [Math.min(...arr), Math.max(...arr)];
  let result = smallestCommonsR([min, min + 1]);


  console.log('iterate over ',arr, ' first result is',result);
  for (let i = min + 2; i <= max; i++) {
    // console.log('argument to call: ', result, i);
    result = smallestCommonsR([result, i]);
  }


  return result;
}

function smallestCommonsR(arr) {
  console.log('smallestCommonsR -> processing: ', arr[0], arr[1]);
  let [min, max] = [Math.min(...arr), Math.max(...arr)];
  if (min == 1) return max;
  let found = false;
  let i = min;
  // i = (i == 1) ? i + 1 : i;

  while (!found) {

    if (i % min == 0 && i % max == 0) {
      found = true;
      console.log('SEARCHING: got', i, '%', max,'or',min, ' has no reminder');

    } else {
      found = false;
    }

    if (found) break;

    i += min;
  }

  console.log(i);
  return i;
}

smallestCommons([100, 101]);
smallestCommons([1, 5]);
smallestCommons([23, 18]);
smallestCommons([1, 13]);

//old 
// function smallestCommonsR(arr) {
//   console.log('smallestCommonsR -> processing: ', arr[0], arr[1]);
//   let [min, max] = [Math.min(...arr), Math.max(...arr)];
//   if (min==1) return max;
//   let found = false;  
//   let i = min;
//   // i = (i == 1) ? i + 1 : i;

//   while (!found) {
//     for (let k = min; k <= max; k++) {
//       if (k == 1) continue;
//       if (i % k != 0) {
//         found = false;
//         console.log('BREAK: because', i, '%', k, ' has reminder that is', i % k);
//         break;
//       } else {
//         found = true;
//       }
//     }
//     if (found) break;

//     i+=min;
//   }

//   console.log(i);
//   return i;
// }