<!-- Notes for tutorial in here -->

Source: https://www.youtube.com/watch?v=k5E2AVpwsko


## main.ts
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3]; 
let f: any[] = [1, true, 'a', false]; 

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;


enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};
let backgroundColor = Color.Red;


## main.js
After command tsc main.ts inside terminal, code above turns to below:

var a;
var b;
var c;
var d;
var e = [1, 2, 3]; // can set to number array 
var f = [1, true, 'a', false]; 

var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;

var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;