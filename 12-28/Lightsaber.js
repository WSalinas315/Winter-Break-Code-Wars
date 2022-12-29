function howManyLightsabersDoYouOwn(name) {
  if(name == 'Zach'){
    return 18;
  } else {
    return 0;
  }
}

// expect 0
let test1 = howManyLightsabersDoYouOwn('Gary');

// expect 0
let test2 = howManyLightsabersDoYouOwn('Yoda');

// expect 18
let test3 = howManyLightsabersDoYouOwn('Zach');

console.log(test1,test2,test3);