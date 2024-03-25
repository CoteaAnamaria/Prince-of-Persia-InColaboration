// Go up and down the stairs
function getStairsMovementDirection(stairNumber, isClimbingStairs) {
  let criteria = stairNumber / 2;
  if (criteria == parseInt(criteria.toString())) {  // is stairNumber divisible by 2 ?
    return isClimbingStairs ? 'up': 'down';
  }
  return 'right';
}
// Zig-zag movement
function getZigZagMovementDirection(step) {
  let criteria = step / 6;
  if (criteria == parseInt(criteria.toString())) {  // is step divisible by 6 ?
    return 'up';
  }
  else {
    criteria = (step + 3) / 6;
    if (criteria == parseInt(criteria.toString())) {  // is (step + 3) divisible by 6 ?
      return 'down';
    }
  }
  return 'right';
}
// Move the prince using the keyboard
let useArrows = true;
let switchKey = 'KeyQ';
let directionKeys = {
  KeyA: 'left', KeyD: 'right', KeyS: 'down', KeyW: 'up'
};
function manuallyControl(keyPressed) {
  if (switchKey.normalize() == keyPressed.normalize()) {
    useArrows = !useArrows;
    return;
  }
  if (useArrows) {
    switch (keyPressed.normalize()) {
      case 'ArrowLeft'.normalize():
        return moveDirection('left');
      case 'ArrowRight'.normalize():
        return moveDirection('right');
      case 'ArrowDown'.normalize():
        return moveDirection('down');
      case 'ArrowUp'.normalize():
        return moveDirection('up');
    }
  }
  else {
    for (let key in directionKeys) {
      if (keyPressed.normalize() == key.normalize()) {
        return moveDirection(directionKeys[key]);
      }
    }
  }
}
// Accumulate 100+ health so that you can defeat the evil wizard
//   OPTIONAL TASK: Drink potion 2
function givePotion2Answer(list) {
  let sum = 0;
  list.forEach(e => {
    let criteria = e / 2;
    if (criteria == parseInt(criteria.toString())) {  // is e divisible by 2 ?
      sum += e;
    }
  });
  return sum;
}
//   OPTIONAL TASK: Drink potion 3
function givePotion3Answer(list) {
  let maximum = list[0];
  list.slice(1).forEach(e => {
    if (maximum < e) {
      maximum = e;
    }
  });
  return maximum;
}
//   OPTIONAL TASK: Drink potion 4
function givePotion4Answer(input, toCapitalize) {
  input = input.split('');
  input.forEach((e, i) => {
    toCapitalize.forEach(c => {
      if (e.normalize() == c.normalize()) {
        input[i] = e.toUpperCase();
      }
    });
  });
  return input.join('');
}
//   OPTIONAL TASK: Drink potion 5
function givePotion5Answer(hours, minutes, seconds, secondsToAdd) {
  seconds += secondsToAdd;
  secondsToAdd = parseInt((seconds / 60).toString());   // secondsToAdd used as minutesToAdd
  seconds -= 60 * secondsToAdd;
  minutes += secondsToAdd;
  secondsToAdd = parseInt((minutes / 60).toString());   // secondsToAdd used as hoursToAdd
  minutes -= 60 * secondsToAdd;
  hours += secondsToAdd;
  secondsToAdd = parseInt((hours / 24).toString());   // secondsToAdd used as daysToAdd
  hours -= 24 * secondsToAdd;
  return hours.toString() + ':' + minutes.toString() + ':' + seconds.toString();
}
//   OPTIONAL TASK: Drink potion 6
function givePotion6Answer(input) {
  let sum = 0;
  input.split('').forEach(e => {
    let number = parseInt(e);
    if (!isNaN(number)) {
      sum += number;
    }
  });
  return sum;
}
//   OPTIONAL TASK: Drink potion 7
function givePotion7Answer(input) {
  return givePotion6Answer(input);
}
//   OPTIONAL TASK: Drink potion 8
function givePotion8Answer(number) {
  let divisor = 2;
  let quotient;
  do {
    quotient = number / divisor;
    if (quotient == parseInt(quotient.toString())) {  // is number divisible by divisor ?
      return false;
    }
    ++divisor;
  }
  while (divisor < quotient);
  return true;
}
//   OPTIONAL TASK: Drink potion 9
function givePotion9Answer(list) {
  // minimum from list
  let minimum = list[0];
  let pos = 0;
  list.slice(1).forEach((e, i) => {
    if (minimum > e) {
      minimum = e;
      pos = i;
    }
  });
  let sum = minimum;
  // pack remainig numbers
  list[pos] = list[0];
  // minimum from remaining numbers
  minimum = list[1];
  list.slice(2).forEach(e => {
    if (minimum > e) {
      minimum = e;
    }
  });
  return sum + minimum;
}
//   OPTIONAL TASK: Drink potion 10
function givePotion10Answer(letterToFind, input) {
  for (let pos = 0; input.length > pos; ++pos) {
    if (letterToFind.normalize() == input[pos].normalize()) {
      return pos;
    }
  }
  return -1;
}
//   OPTIONAL TASK: Drink potion 11
function givePotion11Answer(input, letterToReplace, letterToPutInstead) {
  input = input.split('');
  input.forEach((e, i) => {
    if (letterToReplace.normalize() == e.normalize()) {
      input[i] = letterToPutInstead;
    }
  });
  return input.join('');;
}
//   OPTIONAL TASK: Drink potion 12
function givePotion12Answer(numbers) {
  let sum = 0;
  numbers.forEach(e => ((0 > e) ? (sum -= e): (sum +=e)));
  return sum;
}
// Solve level 7 Dungeon
let isPlayer = e => (e == 10);
let isFreeSpace = e => (e == 11);
let isFire = e => (e == 13);
let isPrincess = e => (e == 99);
// (x, y) coordinates  =>  (y is line, x is column)
let x = 1;
let y = 1;
let xPrev, yPrev;
function updatePreviousCoordinates() {
  xPrev = x;
  yPrev = y;
}
let directions = {  // cw checking
  up: {
    isNotPrev: function() {
      return (yPrev !== this.next());
    },
    next: () => (y - 1)
  },
  right: {
    isNotPrev: function() {
      return (xPrev !== this.next());
    },
    next: () => (x + 1)
  },
  down: {
    isNotPrev: function() {
      return (yPrev !== this.next());
    },
    next: () => (y + 1)
  },
  left: {
    isNotPrev: function() {
      return (xPrev !== this.next());
    },
    next: () => (x - 1)
  },
};
function level7Move(elementLeftOfPrince, elementRightOfPrince, elementUpOfPrince, elementDownOfPrince) {
  // AI: priority: first <princess tile cw> then <free tile cw if not previous tile>
  directions.up.aroundPrince = elementUpOfPrince;
  directions.right.aroundPrince = elementRightOfPrince;
  directions.down.aroundPrince = elementDownOfPrince;
  directions.left.aroundPrince = elementLeftOfPrince;
  for (let direction in directions) {
    if (isPrincess(directions[direction].aroundPrince)) {
      return hasMovedToTile(direction, directions[direction].next);
    }
  }
  for (let direction in directions) {
    if (isFreeSpace(directions[direction].aroundPrince)) {
      if (directions[direction].isNotPrev()) {
        return hasMovedToTile(direction, directions[direction].next);
      }
    }
  }
}
function hasMovedToTile(direction, tileToCheck) {
  moveDirection(direction);
  updatePreviousCoordinates();
  switch (direction) {
    case 'up':
    case 'down':
      return (y = tileToCheck());
    case 'right':
    case 'left':
      return (x = tileToCheck());
  }
}
// OPTIONAL TASK: Solve level 8 Dungeon
function level8Move(gameMap) {
  // get player(prince) coordinates
  // remember:   (x, y) coordinates  =>  (y is line, x is column)
  (() => {
    for (y = 0; gameMap.length > y; ++y) {
      for (x = 0; gameMap[y].length > x; ++x) {
        if (isPlayer(gameMap[y][x])) {
          return;
        }
      }
    }
  })();
  // AI: priority: first <princess tile cw> then <free tile cw if not previous tile>
  directions.up.aroundPrince = function() {
    return gameMap[this.next()][x];
  };
  directions.right.aroundPrince = function() {
    return gameMap[y][this.next()];
  };
  directions.down.aroundPrince = function() {
    return gameMap[this.next()][x];
  };
  directions.left.aroundPrince = function() {
    return gameMap[y][this.next()];
  };
  directions.up.updateCoordinates = () => --y;
  directions.right.updateCoordinates = () => ++x;
  directions.down.updateCoordinates = () => ++y;
  directions.left.updateCoordinates = () => --x;
  let ret = [];
  while (true) {
    for (let direction in directions) {
      if (isPrincess(directions[direction].aroundPrince())) {
        ret.push(direction);
        return ret;
      }
    }
    for (let direction in directions) {
      if (isFreeSpace(directions[direction].aroundPrince())) {
        if (directions[direction].isNotPrev()) {
          updatePreviousCoordinates();
          directions[direction].updateCoordinates();
          ret.push(direction);
          break;
        }
      }
    }
  }
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
  level8Move
};
