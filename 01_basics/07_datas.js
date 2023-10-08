let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toString);
console.log(myDate.toLocaleString);
console.log(typeof myDate);    // object

let myCreateddate = new Date(2023, 0, 23)   //month start  0  in js.
console.log(myCreateddate.toDateString());
 

let myowndate = new Date(2023, 0, 23, 5, 3)
console.log(myowndate.toLocaleString());

let myandate = new Date("2023-01-14")
console.log(myandate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateddate.getTime());
console.log(Date.now()/1000);//or
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay()+ 1);
console.log(newDate.getMonth());



newDate.toLocaleString('default', {
    weekday: "long",
    timeZone:''
})