const data = require("./data");
const {
  zeroObjects,
  createStrings,
  plotStars,
  addMovements,
} = require("./utils");

const getPattern = (array, seconds) => {
    // change x and y positions by x and y speed multiplied by a number of seconds
  const movedStars = addMovements(array, seconds);

  // renumber the coordinates by the same x and y differentials so they are all positive
  const zeroedObjects = zeroObjects(movedStars);

  // create an array of length y of strings of length x
  const stringsArray = createStrings(zeroedObjects);

  // iterate through coordinates and replace the appropriate '.' with '#' to create plot
  const starPlot = plotStars(stringsArray, zeroedObjects);

  return starPlot
};

console.dir(getPattern(data, 10511), { maxArrayLength: null });
