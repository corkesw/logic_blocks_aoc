exports.addMovements = (array, seconds) => {
  const outputArray = array.map((element) => {
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
    if (element.positionX < lowX) lowX = element.positionX;
    if (element.positionY < lowY) lowY = element.positionY;
  });

  const rebasedArray = array.map((element) => {
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
  let stringsLength = array[0].positionX + 1;
  let arrayLength = array[0].positionY + 1;
  array.forEach((element) => {
    if (element.positionX > stringsLength)
      stringsLength = element.positionX + 1;
    if (element.positionY + 1 > arrayLength) {
      arrayLength = element.positionY + 1;
    }
  });

  const string = ".".repeat(stringsLength);
  const stringArray = [];
  for (let i = 0; i < arrayLength; i++) {
    stringArray.push(string);
  }
  return stringArray;
};

exports.plotStars = (strings, coords) => {
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
