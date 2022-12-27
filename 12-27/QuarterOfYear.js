const quarterOf = (month) => {
  if(month < 4){
    return 1;
  } else if(month <= 6){
    return 2;
  } else if(month <= 9){
    return 3;
  } else {
    return 4;
  }
}

// expect 1
let test1 = quarterOf(3);

// expect 3
let test2 = quarterOf(7);

// expect 4
let test3 = quarterOf(12);

console.log(test1,test2,test3);