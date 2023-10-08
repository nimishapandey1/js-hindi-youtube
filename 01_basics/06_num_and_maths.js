const score = 400

const balance = new Number(110)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 12.3456
console.log(otherNumber.toPrecision(3));

const othervalue = 123.897
console.log(othervalue.toPrecision(3));

const othernumber = 1233.897
console.log(othernumber.toPrecision(3));


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// **************** maths******************
console.log(Math);

// abs means negative value change positive value
console.log(Math.abs(-4));
console.log(Math.abs(4));

console.log(Math.round(4.6));     // approx value
console.log(Math.ceil(4.2));    // choice upper value
console.log(Math.floor(4.9));   // choice lower value
console.log(Math.min(4,6,7,8,2));
console.log(Math.max(4,6,7,8,9,2,1));


console.log(Math.random());                     // given value always b/w 0 and 1.
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)