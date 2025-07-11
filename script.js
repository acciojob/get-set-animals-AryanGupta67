// Base Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log the sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Cat class inherits from Animal
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Dog class inherits from Animal
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

