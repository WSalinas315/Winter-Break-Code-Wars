function XO(str) {
  let exes = 0;
  let ohs = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'x' || str[i] == 'X') {
      exes += 1;
    } else if (str[i] == 'o' || str[i] == 'O') {
      ohs += 1;
    }
  }
  if (exes == ohs) {
    return true;
  } else {
    return false;
  }
}

// expect true
let tes1 = XO('xoxoxop');

// expect false
let test2 = XO('xxooxxoqgh');

// expect true
let test3 = XO('ALLurBASErBEL0NG2us');

console.log(tes1,tes2,test3);