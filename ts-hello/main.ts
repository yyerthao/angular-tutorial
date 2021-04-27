

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

// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1, 2, 3]; // can set to number array 
// let f: any[] = [1, true, 'a', false]; // can set to any array with multiple values

// // 
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// // enum is a constance in typescript
// // how to declare an enum
// // the colors in curly brackets will usually follow this type of increment
// enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};
// let backgroundColor = Color.Red;

// ---------------------------- TYPE ASSERTIONS -------------------------

// let message; // the type will be any since we haven't set the variable
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// // second type of assertion, can choose top or bottom line
// let alternativeWay = (message as string).endsWith('c');


// // ------------------------------------------------------------------
// let log = function(message){
//     console.log(message)
// }

// // arrow function 
// let doLog = (message) => console.log(message);

// ------------------------------------------------------------------

// ./ refers to the current folder
import { Point } from './point';

let point  = new Point(1, 2);
point.draw();





/* ---------------------- NOTES -----------------------






*/