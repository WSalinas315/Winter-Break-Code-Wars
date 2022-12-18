var humanYearsCatYearsDogYears = function(humanYears) {
  if(humanYears==1){
    return[1,15,15];
  }
  else if (humanYears==2){
    return[2,24,24];
  } else{
    return [humanYears,24+((humanYears-2)*4),24+((humanYears-2)*5)];
  }
}

let test1 = humanYearsCatYearsDogYears(1);
console.log(test1);

let test2 = humanYearsCatYearsDogYears(2);
console.log(test2);

let test3 = humanYearsCatYearsDogYears(5);
console.log(test3);
