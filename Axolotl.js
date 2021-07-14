export default class Axolotl {
  constructor(
    name = '',
    color = '',
    gender = '',
    size = 0,
    weight = '',
  ) {
    this.name = name;
    this.type = 'Amphibian';
    this.color = color;
    this.gender = gender;
    this.size = size;
    this.weight = weight;
    this.food = 'worms, insects, and molluscs';
    this.noise = 'blub blub blub';
  }

  eat() {
    console.log(`You feed the ${this.name} some ${this.food}`)
  }

  speak() {
    alert(`The ${this.name} says ${this.noise}!`)
  }
}