const data = require("./data");
const {
  zeroObjects,
  createStrings,
  plotStars,
  addMovements,
} = require("./utils");

const getPattern = (array, seconds) => {
  const movedStars = addMovements(array, seconds);
  const zeroedObjects = zeroObjects(movedStars);
  const stringsArray = createStrings(zeroedObjects);
  const starPlot = plotStars(stringsArray, zeroedObjects);
  console.dir(starPlot, { maxArrayLength: null });
};

getPattern(data, 10511);
