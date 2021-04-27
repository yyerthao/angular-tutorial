
export class Point {

    // constructor is a method we call when we create an instance of that class
    // constructor is a reserved keyword in TS
    // ? makes the variables optional - removes compilation error when creating a 
    // point object with no initial value
    // Access Modifiers
    // private will generate a field with the same name as x and y
    constructor(private x?: number, private y?: number) {
    }

    draw() {
        console.log('X:', + this.x + ', Y: ', + this.y);
    }
}