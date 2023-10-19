function sayMyname(){
    console.log("N");
    console.log("I");
    console.log("M");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
}
sayMyname()

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

function addTwoNumbers(num1, num2){
    console.log("nimi");                      //return k phele jitna kuch lekha hoga sb print hoga bt return k bd ka kuch nhi print hoga
    let result = num1 + num2
    return result
}

function addTwoNumbers(num1, num2){           //return k phele jitna kuch lekha hoga sb print hoga bt return k bd ka kuch nhi print hoga
    let result = num1 + num2
    return result
    // console.log("nimi");
}

function addTwoNumbers(num1, num2){          
    return num1 + num2
}


function loginUserMessage(username){
    return '${username} just logged in'
}

console.log(loginUserMessage("nimisha"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());
    


function calculateCartPrice(...num1){
    return num1                                  // three dot means rest operator
}

console.log(calculateCartPrice(200, 400, 500));



function calculateCartPrice(val1, val2, ...num1){
    return num1                                 
}

console.log(calculateCartPrice(200, 400, 500, 2000));

function calculateCartPrice(val1, val2, ...num1){
    return num1                                 
}

const user= {
    username: "nimi",
    price: 199
}

function handleobject(anyobject){
    console.log('Username is ${anyobject.username} and price is ${anyobject.price}');

}
handleobject(user)


const myNewArray = [100, 300, 400, 700]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(getArray)); //or
console.log(returnSecondValue([100, 300, 400, 700]));