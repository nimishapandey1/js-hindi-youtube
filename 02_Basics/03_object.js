// singleton
//Object.create

const mysym = "key1"

//object literals
const JsUser = {
    name: "Nimisha",
    mysym : "myKey1",            // type- string
    [mysym]: "myKey1",           // type - symbol
    age: 18,
    location: "jaipur",
    email: "abc@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}
    console.log(JsUser.email);
    console.log(JsUser["email"]);
    console.log(JsUser["location"]);
    console.log(JsUser.mysym);

    JsUser.email = "abc@gmail.com"        // is tareke s hm kisi ki value change kr skte h(= ka sign use kr k)
    //Object.freeze(JsUser)
    JsUser.email = "abc@microsoft.com"
    console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log('Hello Js User, ${this.name}');
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());