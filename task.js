// Classes Module 3

/* class Person {
  constructor(name = Tom, age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
  }
  doSomethingFun() {
    this.energy -= 10;
  }
}
class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  goToWork() {
    this.xp += 10;
  }
}

function intern() {
  var intern = new Worker(Bob, 21, 110, 0, 10);
  intern.goToWork();
  return intern;
}

function manager() {
  var manager = new Worker(Alice, 30, 120, 100, 30);
  manager.doSomethingFun();
  return manager;
}

intern();
manager(); */

// Array Iteration
// let obj = {
//   userId: 1,
//   name: "Bilal",
//   age: 20,
//   regNo: "SP21-BSE-004",
//   coursesEnrolled: {
//     1: "Computer Vision",
//     2: "Machine Learning",
//     3: "Design Pattern",
//     4: "Software Development Architecture",
//     5: "Intordcution to Management",
//   },
// };
// let arr = [];
// for (key of Object.keys(obj)) {
//   arr.push(key, obj[key]);
// }

// console.log(arr);

// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
function logDiary() {
  for (element of dairy) {
    console.log(element);
  }
}
logDiary();

// Task 2
const animal = {
  canJump: true,
};
const bird = Object.create(animal);
bird.hasFeathers = true;
bird.canFly = true;

function birdCan() {
  for (key of Object.keys(bird)) {
    console.log(key, ": ", bird[key]);
  }
}
birdCan();

// Task 3
function animalCan() {
  for (key in bird) {
    console.log(key, ": ", bird[key]);
  }
}
animalCan();
