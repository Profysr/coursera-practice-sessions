class Animal {
  constructor(color = "yellow", energy = 100) {
    //jo hum arguments pass karein ge wo idhr aaa kr is class k color ko assign ho jye gi value
    this.color = color;
    this.energy = energy;
  }
  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log("Active Energy: ", this.energy);
    } else if (this.energy == 0) {
      this.sleep();
    }
  }
  sleep() {
    this.energy += 20;
  }
  getColor() {
    console.log("Color : ", this.color);
  }
}
class Cat extends Animal {
  constructor(
    color,
    energy,
    canClimbTree = true,
    canJumpHigh = true,
    sound = "purr"
  ) {
    super(color, energy);
    this.canClimbTree = canClimbTree;
    this.canJumpHigh = canJumpHigh;
    this.sound = sound;
  }
  makeSound() {
    console.log("Sound: ", this.sound);
  }
}
class Bird extends Animal {
  constructor(color, energy, canFly = true, sound = "chirp") {
    super(color, energy);
    this.canFly = canFly;
    this.sound = sound;
  }
  makeSound() {
    console.log("Sound: ", this.sound);
  }
}
class HouseCat extends Cat {
  constructor(
    color,
    energy,
    canClimbTree,
    canJumpHigh,
    sound,
    houseCatSound = "meow"
  ) {
    super(color, energy, canClimbTree, canJumpHigh, sound);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option) {
    if (option === true) {
      super.makeSound();
    } else {
      console.log("House Cat Sound:", this.houseCatSound);
    }
  }
}
class Parrot extends Bird {
  constructor(color, energy, canFly, sound, canTalk = false) {
    super(color, energy, canFly, sound);
    this.canTalk = canTalk;
  }
  makeSound(option) {
    if (option === true) {
      super.makeSound();
    } else {
      console.log("Talking", this.canTalk);
    }
  }
}

// Now you can Make intsances here like
let penguin = new Bird(true); //check karna hai isee k agr mein ak parameter bheju to kya hoga
