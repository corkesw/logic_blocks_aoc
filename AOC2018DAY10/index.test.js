const { zeroObjects, createStrings, plotStars } = require("./utils");

describe("zeroObjects", () => {
  test("when passed an array of one object with only positive coords, returns an identical object", () => {
    const input = [
      {
        positionX: 1,
        positionY: 2,
        speedX: 1,
        speedY: 2,
      },
    ];
    const expected = [
      {
        positionX: 1,
        positionY: 2,
        speedX: 1,
        speedY: 2,
      },
    ];
    const actual = zeroObjects(input);
    expect(actual).toEqual(expected);
  });
  test("when passed an array of one object with only negative coords, returns object rebased to 0", () => {
    const input = [
      {
        positionX: -1,
        positionY: -2,
        speedX: 1,
        speedY: 2,
      },
    ];
    const expected = [
      {
        positionX: 0,
        positionY: 0,
        speedX: 1,
        speedY: 2,
      },
    ];
    const actual = zeroObjects(input);
    expect(actual).toEqual(expected);
  });
  test("when passed an array of more than on object with only positive coords, returns identical object", () => {
    const input = [
      {
        positionX: 11,
        positionY: 22,
        speedX: 1,
        speedY: 2,
      },
      { positionX: 1, positionY: 2, speedX: 1, speedY: 2 },
    ];
    const expected = [
      {
        positionX: 11,
        positionY: 22,
        speedX: 1,
        speedY: 2,
      },
      { positionX: 1, positionY: 2, speedX: 1, speedY: 2 },
    ];
    const actual = zeroObjects(input);
    expect(actual).toEqual(expected);
  });
  test("when passed an array of more than on object with only negative coords, returns object rebased to zero", () => {
    const input = [
      {
        positionX: -11,
        positionY: -22,
        speedX: 1,
        speedY: 2,
      },
      { positionX: -1, positionY: -5, speedX: 1, speedY: 2 },
    ];
    const expected = [
      {
        positionX: 0,
        positionY: 0,
        speedX: 1,
        speedY: 2,
      },
      { positionX: 10, positionY: 17, speedX: 1, speedY: 2 },
    ];
    const actual = zeroObjects(input);
    expect(actual).toEqual(expected);
  });
  test("when passed an array of more than on object with only mixed coords, returns object rebased to zero", () => {
    const input = [
      {
        positionX: 11,
        positionY: 22,
        speedX: 1,
        speedY: 2,
      },
      { positionX: -1, positionY: -5, speedX: 1, speedY: 2 },
    ];
    const expected = [
      {
        positionX: 12,
        positionY: 27,
        speedX: 1,
        speedY: 2,
      },
      { positionX: 0, positionY: 0, speedX: 1, speedY: 2 },
    ];
    const actual = zeroObjects(input);
    expect(actual).toEqual(expected);
  });
});

describe("createStrings", () => {
  test("should return an array with length 1, containing a string of length 1 when passed a single object with 0,0 coordinates ", () => {
    const input = [
      {
        positionX: 0,
        positionY: 0,
        speedX: 1,
        speedY: 2,
      },
    ];
    const actual = createStrings(input);
    const expected = ["."];
    expect(actual).toEqual(expected);
  });
  test("should return an array with length 1, containing a strings of length 2 when passed a single object with 1,0 coordinates ", () => {
    const input = [
      {
        positionX: 1,
        positionY: 0,
        speedX: 1,
        speedY: 2,
      },
    ];
    const actual = createStrings(input);
    const expected = [".."];
    expect(actual).toEqual(expected);
  });
  test("should return an array with length 2, containing a string of length 1 when passed a single object with 0,1 coordinates ", () => {
    const input = [
      {
        positionX: 0,
        positionY: 1,
        speedX: 1,
        speedY: 2,
      },
    ];
    const actual = createStrings(input);
    const expected = [".", "."];
    expect(actual).toEqual(expected);
  });
  test("should return the correct array for higher coordinates ", () => {
    const input = [
      {
        positionX: 10,
        positionY: 20,
        speedX: 1,
        speedY: 2,
      },
    ];
    const actual = createStrings(input);
    const expected = [
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
      "...........",
    ];
    expect(actual).toEqual(expected);
  });
  test("should return correct array calculated from highest x and y in the input array ", () => {
    const input = [
      {
        positionX: 0,
        positionY: 5,
        speedX: 1,
        speedY: 2,
      },
      {
        positionX: 3,
        positionY: 3,
        speedX: 1,
        speedY: 2,
      },
    ];
    const actual = createStrings(input);
    const expected = ["....", "....", "....", "....", "....", "...."];
    expect(actual).toEqual(expected);
  });
});

describe('plotStars', () => {
    test('should return a single # when passed coords of 0,0', () => {
        const strings = ['.']
        const coords = [{
            positionX: 0,
            positionY: 0,
            speedX: 1,
            speedY: 2,
          },]
        const actual = plotStars(strings, coords)
        const expected =["#"]
        expect(actual).toEqual(expected)
    });
    test('should return correct placed #s when passed coords which have differing z coords but only 0 y coords', () => {
        const strings = ['....']
        const coords = [{
            positionX: 0,
            positionY: 0,
            speedX: 1,
            speedY: 2,
          },
          {
            positionX: 3,
            positionY: 0,
            speedX: 1,
            speedY: 2,
          }]
        const actual = plotStars(strings, coords)
        const expected =["#..#"]
        expect(actual).toEqual(expected)
    });
    test('should return correct placed #s when passed coords which have differing z coords and differing y coords', () => {
        const strings = ['....', '....', '....']
        const coords = [{
            positionX: 0,
            positionY: 2,
            speedX: 1,
            speedY: 2,
          },
          {
            positionX: 3,
            positionY: 0,
            speedX: 1,
            speedY: 2,
          }]
        const actual = plotStars(strings, coords)
        const expected =['...#', '....', '#...']
        expect(actual).toEqual(expected)
    });
});
