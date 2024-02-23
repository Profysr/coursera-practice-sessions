class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightStatus() {
    console.log("Lights on? ", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

class HighSpeedTrain extends Train {
  constructor(color, lightsOn, highSpeedOn, passengers) {
    super(color, lightsOn);
    this.highSpeedOn = highSpeedOn;
    this.passengers = passengers;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High Speed Status on?", this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLights();
    super.lightStatus();
    console.log("Lights are 100% operational");
  }
  getPrototype() {
    var proto = this.__proto__;
    console.log(proto);
  }
}
/* Naming Convention 
Must start with aplhabet, $,_;
No space or other character after first letter 
case sensitive as myAge !== myage; */

let _train1 = new Train("red", true);
let $train2 = new Train("blue", false);
let train$3 = new Train("blue", false);
let train4 = new HighSpeedTrain("yellow", true, true, 20);

_train1.getPrototype();
$train2.getSelf();
train$3.lightStatus();

train4.toggleLights();
train4.getPrototype();
// train4.prototype.__proto__;

//practice
let nameStr = "name";
let obj = {
  [nameStr]: "bilal",
  regNo: 4,
  age: 21,
  displayName: function () {
    console.log(this.name);
  },
};
let obj2 = {
  [nameStr]: "bilal",
  regNo: 4,
  age: 21,
  objType: 2,
  displayName: () => {
    console.log(obj2.name);
  },
};
obj.objType = 1;

obj.displayName();
obj2.displayName();
