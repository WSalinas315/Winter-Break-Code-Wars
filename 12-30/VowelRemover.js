function shortcut (string) {
  const charArray = string.split("").filter((char) => char != 'a' && char != 'e' && char != 'i' && char != 'o' && char != 'u');
  if(charArray.length == 0){
    return "";
  } else{
    return charArray.reduce(myFunc);
  }
}

function myFunc(result, addition){
  return result + addition;
}

// expect brgrs
let test1 = shortcut('burgers');

// expect ct
let test2 = shortcut('cat');

// expect flbbr
let test3 = shortcut('flubber');

console.log(test1,test2,test3);