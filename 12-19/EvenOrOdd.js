function evenOrOdd(number) {
  if (number == 0 || number % 2 == 0){
    return "Even";
  } else {
    return "Odd";
  }
}

// Expect Even
let test1 = evenOrOdd(4);

// Expect Odd
let test2 = evenOrOdd(7);

// Expect Even
let test3 = evenOrOdd(0);

// Expect Odd
let test4 = evenOrOdd(977);

console.log(test1, test2, test3, test4);