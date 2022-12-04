// OOP

// const person = {
//     fisrtName: "Alperen",
//     lastName: "akdogan",
//     birthYear: 2021,
//     skills: ["JS", "Python", "CSS"],
//     employed: false,

//     calculateAge2() {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

// };

// console.log(person.calculateAge2());
// console.log(person.age);


// ! This Examples

// const calcAgeArrow = (birthYear) => {
//     console.log("Arrow Function in Global Scope");
//     console.log(this);
//     console.log(2022 - birthYear);
// };

// calcAgeArrow(1980);

const teacher = {
    birthYear: 1984,
    calcAge() {
        console.log("regular function in an Object");
        console.log(this);
        console.log(2022 - this.birthYear);
    },
    calcAgeArrow: () => {
        console.log("arrow function in an Object");
        console.log(this);
        console.log(2022 - this.birthYear);
    },
    calcAgeDelayed() {
        setTimeout(function () {
            console.log("regular function in setTimeout");
            console.log(this);
            this.calcAge();
        }, 2000);
    },
    calcAgeDelayedArrow: function () {
        setTimeout(() => {
            console.log("arrow function in setTimeout");
            consol.log(this);
            this.calcAge();
        }, 2000); 
    },
};

// teacher.calcAge();
// teacher.calcAgeArrow();
// teacher.calcAgeDelayed();
// teacher.calcAgeDelayedArrow();


// defining a new object !
// const student = {
//     birthYear: 2000,
// };

// student.calcAge = teacher.calcAge;
// student.calcAge();

// new object
// const myFunc = teacher.calcAge();
// myFunc();



// new object
let anObject = {
    firstName: 'John',
    age: 30,
    isMarried: true,
    introduce: () => {
        return `${this.firstName} is ${this.age} years old.`;
    },
    introduce2: function () {
        return `${this.firstName} is ${this.age} years old`;
    },
};

console.log(anObject.introduce());
console.log(anObject.introduce2());