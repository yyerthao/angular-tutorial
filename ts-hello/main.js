// function log(message){
//     console.log(message);
// }
// var message = 'Hello World';
// log(message);
// go to terminal 
//  tsc main.ts
//  node main.js
// should print out Hello World in terminal
// ------------------------ Variable declarations ------------------------
// var number = 1;
// let count = 2:
// ------------------------------------------------------------------
// function doSomething(){
//     for(let i = 0; i < 5; i++){
//         console.log(i);
//     }
//     console.log('Finally', + i);
// }
// doSomething();
// IN TERMINAL
// tsc main.ts | node main.js
// ------------------------------------------------------------------
var a;
var b;
var c;
var d;
var e = [1, 2, 3]; // can set to number array 
var f = [1, true, 'a', false]; // can set to any array with multiple values
// 
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// enum is a constance in typescript
// how to declare an enum
// the colors in curly brackets will usually follow this type of increment
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
// ------------------------------------------------------------------
// ------------------------------------------------------------------
