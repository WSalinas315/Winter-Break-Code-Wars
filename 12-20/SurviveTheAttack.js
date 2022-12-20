function hasSurvived(attackers, defenders){
  let atkSurvivors = 0;
  let defSurvivors = 0;
  if(attackers.length >= defenders.length){
    for(let i=0; i < defenders.length; i++){
      if(attackers[i] > defenders[i]){
        atkSurvivors++;
      } else if(attackers[i] < defenders[i]){
        defSurvivors++;
      }
    }
    atkSurvivors += attackers.length - defenders.length;
  } else{
    for(let i=0; i < attackers.length; i++){
      if(attackers[i] > defenders[i]){
        atkSurvivors++;
      } else if(attackers[i] < defenders[i]){
        defSurvivors++;
      }
    }
    defSurvivors += defenders.length - attackers.length;
  }
  if (defSurvivors > atkSurvivors){
    return true;
  } 
  else if(atkSurvivors > defSurvivors){
    return false;
  } 
  else if(atkSurvivors == defSurvivors){
    let atkPower = 0;
    let defPower = 0;
    for(let attacker of attackers){
      atkPower += attacker;
    }
    for(let defender of defenders){
      defPower += defender;
    }
    if(atkPower > defPower){
      return false;
    } else{
      return true;
    }
  }
}

// expect true
let test1 = hasSurvived([1,2,3],[3,2,1,1]);

// expect false
let test2 = hasSurvived([5,8,2,6],[3,6,4,2]);

// expect true
let test3 = hasSurvived([4,5,3,2],[9,5,2,2]);

console.log(test1, test2, test3);