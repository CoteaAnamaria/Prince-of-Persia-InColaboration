function getStairsMovementDirection(stairNumber, isClimbingStairs) {
  if (stairNumber % 2 == 0 && !isClimbingStairs)
    return "down";
  if (stairNumber % 2 == 1 && !isClimbingStairs)
    return "right";
  if (stairNumber % 2 == 0 && isClimbingStairs)
    return "up";
  if (stairNumber % 2 == 1 && isClimbingStairs)
    return "right";
}
function getZigZagMovementDirection(step) {
  if (step == 0)
    return "up";
  if (step % 3 != 0)
    return "right";
  if (step % 3 == 0 && step % 2 == 0)
    return "up";
  if (step % 3 == 0 && step % 2 == 1)
    return "down";
}

let modearrows = true;
function manuallyControl(pressedKey) {
  if (pressedKey === "KeyQ")
    modearrows = !modearrows;
  if (pressedKey == "ArrowUp" && modearrows)
    moveDirection("up");
  if (pressedKey == "ArrowLeft" && modearrows)
    moveDirection("left");
  if (pressedKey == "ArrowDown" && modearrows)
    moveDirection("down");
  if (pressedKey == "ArrowRight" && modearrows)
    moveDirection("right");
  if (pressedKey == "KeyW" && !modearrows)
    moveDirection("up");
  if (pressedKey == "KeyA" && !modearrows)
    moveDirection("left");
  if (pressedKey == "KeyS" && !modearrows)
    moveDirection("down");
  if (pressedKey == "KeyD" && !modearrows)
    moveDirection("right");
}

function givePotion2Answer(list) {
  let sum = 0;
  for(let i = 0; i < list.length; i++) {
    if(list[i]%2==0) {
      sum += list[i];
    }
  }
  return sum;
}
function givePotion3Answer(list) {
  let max = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }
  return max;
}
function givePotion4Answer(input, toCapitalize) {
  for (let i = 0; i < toCapitalize.length; i++) {
    let isInside = input.includes(toCapitalize[i]);
    if (isInside) {
      let x = toCapitalize[i].toUpperCase();
      input = input.replace(toCapitalize[i],x);
    }
  }
  return input;
}
function givePotion5Answer(hours, minutes, seconds, secondsToAdd) {
  seconds += secondsToAdd;
  if (seconds > 59) {
    minutes += 1;
    seconds -= 60;
  }
  if (minutes > 59) {
    hours += 1;
    minutes -= 60;
  }
  if (hours > 23)
    hours = 0;
  return hours + ":" + minutes + ":" + seconds;
}
function givePotion6Answer(input) {
  let sum = 0;
  for(let i=0; i<input.length; i++) {
    if(!isNaN(input[i])) {
    sum += +input[i];
    }
  }
  return sum;
}
function givePotion7Answer(input) {
  let sum = 0;
  for(let i=0; i<input.length; i++) {
    if(!isNaN(input[i])) {
    sum += +input[i];
    }
  }
  return sum;
}
function givePotion8Answer(number) {
  let isPrime = true;
  if(number == 1) {
    isPrime = false;
  }
  else {
    if(number > 1) {
      for(let i = 2; i < number; i++) {
        if(number%i==0) {
          isPrime = false;
        }
      }
    }
  }
  return isPrime;
}
function givePotion9Answer(list) {
  let sorted = list.sort((a,b) => a - b).slice(0,2);
  return sorted[0] + sorted[1];
}
function givePotion10Answer(letterToFind, input) {
  if (input.includes(letterToFind)) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === letterToFind) {
        return i;
      }
    }
  }
  else {
    return -1;
  }
}
function givePotion11Answer(input, letterToReplace, letterToPutInstead) {
  return input.split(letterToReplace).join(letterToPutInstead);
}
function givePotion12Answer(numbers) {
  let sum = 0;
  for(let i=0; i<numbers.length; i++) {
    if(numbers[i] < 0) {
      numbers[i] *= -1;
    }
    sum += numbers[i];
  }
  return sum;
}
let x = 1;
let y = 1;
let px;
let py;
function hasMovedToTile(direction, tileToCheck) {
  //moveDirection(direction);
  //if(tileToCheck)
}
function level7Move(elementLeftOfPrince, elementRightOfPrince, elementUpOfPrince, elementDownOfPrince) {
  /*if(elementDownOfPrince == 11 && py != y+1) {
    hasMovedToTile('down');
    y++;
  }
  if(elementRightOfPrince == 11 && px != x+1) {
    hasMovedToTile('right');
    x++;
  }
  if(elementLeftOfPrince == 11 && px != x-1) {
    hasMovedToTile('left');
    x--;
  }
  if(elementUpOfPrince == 11 && py != y-1) {
    hasMovedToTile('up');
    y--;
  }
  px = x;
  py = y; */
}
function level8Move(gameup) {

}

 // DON'T MODIFY THE CODE BELOW THIS LINE

 export {
   getStairsMovementDirection, 
   getZigZagMovementDirection, 
   manuallyControl, 
   givePotion2Answer, 
   givePotion3Answer, 
   givePotion4Answer, 
   givePotion5Answer, 
   givePotion6Answer, 
   givePotion7Answer, 
   givePotion8Answer, 
   givePotion9Answer, 
   givePotion10Answer, 
   givePotion11Answer, 
   givePotion12Answer, 
   level7Move, 
   level8Move,
 };