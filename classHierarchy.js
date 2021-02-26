// function solv() {
    class Figure {
        constructor(units) {
            this.units = units;
        }

        get area() {
            if (this.units === 'm') {
                return 0.01
            } else if (this.units === 'mm') {
                return 10;
            } else {
                this.units = 'cm'
                return 1;
            }
        }

        changeUnits(value) {
            this.units = value;
        }

        toString() {
            return `Figures units: ${this.units}`
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius
        }

        get area() {
            return (Math.pow(super.area, 2) * (this.radius * this.radius)) * Math.PI;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius * super.area}`;
        }


    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            return (Math.pow(super.area, 2) * (this.width * this.height));
        }

        changeUnits(value) {
            super.changeUnits(value);
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width * super.area}, height: ${this.height * super.area}`;
        }
    }

//     return {
//         Figure,
//         Circle,
//         Rectangle
//     }
// }

let c = new Circle(5);
console.log(c.area);//78.53981633974483
console.log(c.toString());//Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area);// 1200 
console.log(r.toString());//Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area);// 12
console.log(r.toString());// Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area);// 7853.981633974483
console.log(c.toString())
// Figure, Circl
// and
// Rectangle