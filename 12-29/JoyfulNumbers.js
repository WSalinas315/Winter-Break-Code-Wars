function numberJoy(n) {
  let digitSum = 0;
  let dsReversed = '';
  for(let i = 0; i < n.toString().length; i++){
    let numAdd = n.toString().charAt(i);
    digitSum += Number(numAdd);
  }
  for(let j = digitSum.toString().length-1; j >= 0; j-- ){
    let digitAdd = digitSum.toString().charAt(j);
    dsReversed += digitAdd;
  }
  if(n == (digitSum*Number(dsReversed))){
    return true;
  } else {
    return false;
  }
}

// expect true
let test1 = numberJoy(1729);

// expect false
let test2 = numberJoy(2435);

// expect false
let test3 = numberJoy(74535);

console.log(test1,test2,test3);