import { getDiscountPercentage, formatDecimalSpaces, convertKrone, calculateTax } from "./question-3";


test("Get the discount percentage", () => {
    expect(getDiscountPercentage(100, 75)).toBe(25);
});


test("Format decimals to two decimal spaces", () => {
    expect(formatDecimalSpaces(15.5555555)).toBe(15.56);
});


test("Convert a value to krone", () => {
    expect(convertKrone(10)).toBe(101.80);
});


test("Calculate the tax for amount given", () => {
    expect(calculateTax(100)).toBe(125);
});