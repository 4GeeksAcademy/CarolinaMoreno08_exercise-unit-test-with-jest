// Import the function sum from the app.js file
//*** const { sum } = require('./app.js');

// Start your first test
//***  test('adds 14 + 9 to equal 23', () => {
//     // Inside the test we call our sum function with 2 numbers
//***      let total = sum(14, 9);

//     // We expect the sum of those 2 numbers to be 23
//***      expect(total).toBe(23);
//***  });

const appFunctions = require('./app.js');
test("One euro should be 1.07 dollars", ()=> {
     expect(appFunctions.fromEuroToDollar(5.5)).toBe(5.5 * 1.07); // 1 euro is 1.07 dollars, then 5.5 euros should be = (3.5 * 1.07)
});



test("One dollar should be 146.3 yen", ()=> {
    expect(appFunctions.fromDollarToYen(7.3)).toBe(1067.99); // 1 dollar is 146.3 yen, then 7.3 dollars should be = (7.3 * 146.3)
});



test("One yen should be 0.0056 pounds", ()=> {
    expect(appFunctions.fromYenToPound(11.8)).toBe(0.06608); // 1 yen is 0.0056 pounds, then 11.8 euros should be = (11.8 * 0.0056)
});