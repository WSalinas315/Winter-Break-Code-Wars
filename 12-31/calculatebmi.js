function bmi(weight, height) {
  let bmi = weight / (height*height);
  if (bmi > 30){
    return "Obese";
  } else if(bmi > 25){
    return "Overweight";
  } else if (bmi > 18.5){
    return "Normal";
  } else {
    return "Underweight";
  }
}

// expect Obese
let test1 = bmi(592, 61);

// expect Normal
let test2 = bmi(124, 67);

// expect Underweight
let test3 = bmi(21, 77);

console.log(test1,test2,test3);