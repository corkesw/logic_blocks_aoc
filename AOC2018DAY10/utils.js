exports.addMovements = (array, seconds) => {
  const outputArray = array.map((element) => {
    // change x and y positions by x and y speed multiplied by a number of seconds
    return {
      positionX: element.positionX + element.speedX * seconds,
      positionY: element.positionY + element.speedY * seconds,
      speedX: element.speedX,
      speedY: element.speedY,
    };
  });
  return outputArray;
};

exports.zeroObjects = (array) => {
  let lowX = 0;
  let lowY = 0;
  array.forEach((element) => {
    // determine lowest x and y positions
    if (element.positionX < lowX) lowX = element.positionX;
    if (element.positionY < lowY) lowY = element.positionY;
  });

  const rebasedArray = array.map((element) => {
    // renumber the coordinates by the same x and y differentials so they are all positive
    return {
      positionX: (element.positionX -= lowX),
      positionY: (element.positionY -= lowY),
      speedX: element.speedX,
      speedY: element.speedY,
    };
  });
  return rebasedArray;
};

exports.createStrings = (array) => {
  // determine highest x and y positions
  let stringsLength = array[0].positionX + 1;
  let arrayLength = array[0].positionY + 1;
  array.forEach((element) => {
    if (element.positionX > stringsLength)
      stringsLength = element.positionX + 1;
    if (element.positionY + 1 > arrayLength) {
      arrayLength = element.positionY + 1;
    }
  });
  // create an array of length y of strings of length x
  const string = ".".repeat(stringsLength);
  const stringArray = [];
  for (let i = 0; i < arrayLength; i++) {
    stringArray.push(string);
  }
  return stringArray;
};

exports.plotStars = (strings, coords) => {
  // iterate through coordinates and replace the appropriate '.' with '#' to create plot
  const outputStrings = [...strings];
  coords.forEach((coord) => {
    starPosition = coord.positionX;
    starString = coord.positionY;
    outputStrings[starString] = `${outputStrings[starString].slice(
      0,
      starPosition
    )}#${outputStrings[starString].slice(starPosition + 1)}`;
  });
  return outputStrings;
};
