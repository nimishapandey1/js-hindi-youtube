const name = "nimisha-as"
const repoCount = 50 
 
console.log(name + repoCount + " value");

console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const namevalue = new String("Nimisha")

console.log(namevalue[0]);
console.log(namevalue.__proto__);

console.log(namevalue.length);
console.log(namevalue.toUpperCase());
console.log(namevalue.charAt(2));
console.log(namevalue.indexOf('i'));

const newString = namevalue.substring(0,4)
console.log(newString);

const anotherString = namevalue.slice(-8, 4);
console.log(anotherString);                                   // ignore negative value start on 0.

// remove extraspace use  (.trime) 

const url = "https://nimi.com/nimisha%20pandey"

console.log(url.replace('%20', '-')); 
 
// find some keyword in url use (url.include())

// string js mdn site search and explore it and also search google.
