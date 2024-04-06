
// This is my function that sums two numbers
//***  const sum = (a,b) => {
//***     return a + b
//*** }

// Just a console log for ourselves
//*** console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
//***  module.exports = { sum };


// One euro is:
// let oneEuroIs = {
//     "JPY": 156.5, // japan yen
//     "USD": 1.07, // us dollar
//     "GBP": 0.87, // british pound
// };

// 1 USD = 146.3 YEN
// 1 EUR = 1.07 USD
// 1 YEN = 0.0056 GBP


////////////////////////////////////////////////////////////////
function fromEuroToDollar(a){
    return a * 1.07;
};



////////////////////////////////////////////////////////////////
function fromDollarToYen(a){
    return a * 146.3;
};



// ////////////////////////////////////////////////////////////////
function fromYenToPound(a){
    return a * 0.0056;
};
module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};