var summation = function (num) {
  let sum = 0;
  for(let i=1; i <= num; i++){
    sum += i;
  }
  return sum;
}



// expect 10
let tes1 = summation(4);

// expect 21
let test2 = summation(6);

// expect 3
let test3 = summation(2);

console.log(tes1,tes2,test3);