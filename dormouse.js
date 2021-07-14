export default class dormouse {
  constructor(
    name = '',
    color = '',
    gender = '',
    size = 0,
    weight = '',
  ) {
    this.name = name;
    this.type = 'Mammal';
    this.color = color;
    this.gender = gender;
    this.size = size;
    this.weight = weight;
    this.food = 'fruits, nuts, and insects';
    this.noise = 'squeak';
  }

  eat() {
    console.log(`You feed the ${this.name} some ${this.food}`)
  }

  speak() {
    alert(`The ${this.name} says ${this.noise}!`)
  }
}