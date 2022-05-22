const data = require("./test-data");
const { zeroObjects, createStrings, plotStars } = require("./utils");

const zeroedObjects = zeroObjects(data);

console.log(zeroedObjects);
const stringsArray = createStrings(zeroedObjects);
console.log(stringsArray.length)
const starPlot = plotStars(stringsArray, zeroedObjects);

console.log(starPlot);
