const { captcha } = require(".");

describe("captcha", () => {
  test("when passed a single digit, returns 0", () => {
    expect(captcha("1")).toBe(0);
    expect(captcha("8")).toBe(0);
  });
  test("when passed a number with one repetition, returns that number", () => {
    expect(captcha("110")).toBe(1);
    expect(captcha("889")).toBe(8);
  });
  test("when passed a number with more repetitions, sums those repeated numbers up", () => {
    expect(captcha("1110")).toBe(2);
    expect(captcha("899981")).toBe(18);
  });
  test("when passed a number withe the same first and last numbers, includes that number in the sum", () => {
    expect(captcha("1111")).toBe(4);
    expect(captcha("8998")).toBe(17);
  });
});
