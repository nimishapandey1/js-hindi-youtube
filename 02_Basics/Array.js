const myArr = [0, 1, 2, 3, 4, 5]    // store multiple item in single variable i.e called array

console.log(myArr[0]);

const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);


// Array methods

myArr.push(6)            // add value
console.log(myArr);

myArr.pop()                    // remove value
console.log(myArr);

myArr.unshift(9)               // value add in first position
console.log(myArr);

myArr.shift()               // remove first position value
console.log(myArr);

console.log(myArr.includes(9));     // find value
console.log(myArr.indexOf(19));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3) // isme jitne range di hote h us s ek km print hota h and main list m sare element rhte h
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // is jitne range di hote h utna print hota h aur range s bache hueye element main list m bachte h
console.log(myn2);
console.log("C", myArr);