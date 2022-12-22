function positiveSum(arr) {
  let sum = 0;
  for(let number of arr){
    if(number > 0){
      sum += number;
    }
  }
  return sum;
}

// expect 19
let test1 = positiveSum([3,-5,6,10]);

// expect 31
let test2 = positiveSum([30, 0, -4, -19, 1, -2]);

// expect 12
let test3 = positiveSum([3, -3, 4, -4, 5, -5, 0]);

console.log(test1, test2, test3);