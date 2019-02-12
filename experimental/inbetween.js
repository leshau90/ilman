//minimal common of multiplication result between two values
function smallestCommons(arr) {
  let found = false;
  let i = 1;
 let [min,max]= [Math.min(...arr),Math.max(...arr)] 

  while (!found) {
    for (let k = min; k <= max; k++) {
      if (i % k != 0) {
        found = false;
        // console.log('BREAK: because', i, '/', k, ' has reminder that is', i % k);
        break;
      } else {
        found = true;
      }
    }
    if (found) break;
    i++;
  }

  console.log(i);
  return i;
}

// smallestCommons([1, 18]);
smallestCommons([23, 18]);
smallestCommons([1, 13]);