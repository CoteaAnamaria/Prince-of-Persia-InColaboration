//1
function getStairsMovementDirection(stairNumber, isClimbingStairs) {
  if (stairNumber % 2 === 0) {
    if (!isClimbingStairs) {
      return "down";
    } else {
      return "up";
    }
  } else {
    return "right";
  }
}

//2
function getZigZagMovementDirection(step) {
  if (step % 6 === 0) {
    return "up";
  } else if (step % 3 === 0) {
    return "down";
  } else {
    return "right";
  }
}

// //3
let currentControlFunction = manuallyControlA;

function manuallyControl(keypres) {
  if (keypres === "KeyQ") {
    if (currentControlFunction === manuallyControlA) {
      currentControlFunction = manuallyControlK;
    } else {
      currentControlFunction = manuallyControlA;
    }
  } else {
    currentControlFunction(keypres);
  }
}

function manuallyControlA(keypressed) {
  if (keypressed == "ArrowUp") {
    moveDirection("up");
  } else if (keypressed == "ArrowDown") {
    moveDirection("down");
  } else if (keypressed == "ArrowRight") {
    moveDirection("right");
  } else if (keypressed == "ArrowLeft") {
    moveDirection("left");
  }
}
function manuallyControlK(secondkeys) {
  if (secondkeys == "KeyW") {
    moveDirection("up");
  } else if (secondkeys == "KeyS") {
    moveDirection("down");
  } else if (secondkeys == "KeyD") {
    moveDirection("right");
  } else if (secondkeys == "KeyA") {
    moveDirection("left");
  }
}

//...givePotion...2 ...//  What is the sum of all the even numbers in the list
function givePotion2Answer(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 == 0) {
      sum += list[i];
    }
  }
  return sum;
}

//...givePotion..3 ...// Find the highest number in the list
function givePotion3Answer(list) {
  let highestnbr = list[0];
  for (let i = 1; i < list.length; i++) {
    if (highestnbr < list[i]) {
      highestnbr = list[i];
    }
  }
  return highestnbr;
}

// givePotion....4 

//the string |cl| the letters: |o,c|
//   input="cl"
//   toCapitalize = [o,c]
function givePotion4Answer(input, toCapitalize) {
  for (let i = 0; i < toCapitalize.length; i++) {
    for (let j = 0; j < input.length; j++) {
      let isInside = input.includes(toCapitalize[i]);
      if (isInside) {
        let x = toCapitalize[i].toUpperCase();
        input = input.replace(toCapitalize[i], x);
      }
    }
  }
  return input;
}

// givePotion....5
function givePotion5Answer() {}

// ....6..// Sum all the numbers from the following input: |*1*5*7|
function givePotion6Answer(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      sum += +input[i];
    }
  }
  return sum;
}

// ..givePotion..7.../ Make a sum of all the numbers in the input
function givePotion7Answer(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      sum += +input[i];
    }
  }
  return sum;
}

// ..givePotion..8../ Is the number |17| prime or not ?
function givePotion8Answer(number) {
  if (number == 1) {
    return false;
  } else if (number == 2) {
    return true;
  } else if (number % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

// ...givePotion..9../ Make the sum of the 2 smallest numbers in the list
function givePotion9Answer(list) {
  let firstNbr = Infinity;
  let secondNbr = Infinity;
  for (let i = 0; i < list.length; i++) {
    if (list[i] < firstNbr) {
      secondNbr = firstNbr;
      firstNbr = list[i];
    } else if (list[i] < secondNbr) {
      secondNbr = list[i];
    }
  }
  return firstNbr + secondNbr;
}

// ...givePotion..10
function givePotion10Answer() {}

// ..givePotion..11
function givePotion11Answer() {}

// .givePotion..12.../  Make the sum of all the numbers in the list |-4,0|.
//  If a number is
// negative make it positive before addition [-1,2] => [1, 2] => 3
function givePotion12Answer(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] < 0) {
      list[i] = list[i] * -1;
    }
    sum += list[i];
  }
  return sum;
}

// level 7
let lastMove = "";

function level7Move(
  elementLeftOfPrince,
  elementRightOfPrince,
  elementUpOfPrince,
  elementDownOfPrince
) {
  if (elementDownOfPrince !== 13 && lastMove !== "up") {
    hasMovedToTile("down");
    lastMove = "down";
  } else if (elementRightOfPrince !== 13 && lastMove !== "left") {
    hasMovedToTile("right");
    lastMove = "right";
  } else if (elementUpOfPrince !== 13 && lastMove !== "down") {
    hasMovedToTile("up");
    lastMove = "up";
  } else if (elementLeftOfPrince !== 13 && lastMove !== "right") {
    hasMovedToTile("left");
    lastMove = "left";
  }
}

function hasMovedToTile(direction, tileToCheck) {
  if (direction === "down") {
    moveDirection("down");
  } else if (direction === "right") {
    moveDirection("right");
  } else if (direction === "up") {
    moveDirection("up");
  } else if (direction === "left") {
    moveDirection("left");
  }
}

// level 8
function level8Move() {}

// // task 1 down the stairs
// function getStairsMovementDirection(stairNumber, isClimbingStairs) {
//   if (stairNumber % 2 == 0) {
//     if (isClimbingStairs) {
//       return "up";
//     } else {
//       return "down";
//     }
//   } else {
//     return "right";
//   }
// }

// //task 2 up the stairs in zig zag
// function getZigZagMovementDirection(step) {
//   if (step === 0 || step === 6) {
//     return "up";
//   } else if (step % 3 == 0) {
//     return "down";
//   } else return "right";
// }

// // potion 2

// function givePotion2Answer(list) {
//   let sum = 0;
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] % 2 === 0) {
//       sum += list[i];
//     }
//   }
//   return sum;
// }

// //potion 3
// function givePotion3Answer(list) {
//   let highestnbr = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (highestnbr < list[i]) {
//       highestnbr = list[i];
//     }
//   }
//   return highestnbr;
// }

// function givePotion4Answer() {}
// function givePotion5Answer() {}

// //potion 6
// function givePotion6Answer(input) {
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (!isNaN(input[i])) {
//       sum += +input[i];
//     }
//   }
//   return sum;
// }

// //potion 7
// function givePotion7Answer(input) {
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (!isNaN(input[i])) {
//       sum += +input[i];
//     }
//   }
//   return sum;
// }

// //potion 8
// function givePotion8Answer(number) {
//   let isPrime = true;
//   if (number === 1) {
//     isPrime = false;
//     return isPrime;
//   } else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//       if (number % i == 0) {
//         isPrime = false;
//         return isPrime;
//       } else {
//         return true;
//       }
//     }
//   }
// }

// //poion 9
// function givePotion9Answer(list) {
//   let sum = 0;
//   let smallNbr1 = Infinity;
//   let smallNbr2 = Infinity;
//   for (let i = 0; i < list.length; i++) {
//     let temporar = list[i];
//     if (temporar < smallNbr1) {
//       smallNbr2 = smallNbr1;
//       smallNbr1 = temporar;
//     } else if (temporar < smallNbr2) {
//       smallNbr2 = temporar;
//     }
//   }
//   return (sum = smallNbr1 + smallNbr2);
// }

// function givePotion10Answer() {}
// function givePotion11Answer() {}

// //potion 12
// function givePotion12Answer(number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] < 0) {
//       number[i] = number[i] * -1;
//     }
//     sum += number[i];
//   }
//   return sum;
// }

// function level7Move() {}
// function level8Move() {}

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
