function grow(x){
  return x.reduce((product, entry) => product * entry);
}

// expect 10
let test1 = summation([2,5]);

// expect 30
let test2 = summation([2,3,5]);

// expect 60
let test3 = summation([5,1,3,4]);

console.log(test1,test2,test3);