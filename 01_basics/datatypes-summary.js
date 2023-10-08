// Primitive 

// 7types : String, Number, Boolean, null, Undefined, symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const BigNumber = 1234567899876543221n


// Reference type(Nom Primitive)

// Array, Objects, Function

// ************************************
// Stack(Primitive typpe memory used), Heap (Non Primitive)


let myYoutubename = "nimishalifedotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);


