export default class ermine {
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
    this.food = 'rodents, shrews, rabbits, frogs, insects, birds, and eggs';
    this.noise = 'squeak';
  }

  eat() {
    console.log(`You feed the ${this.name} some ${this.food}`)
  }

  speak() {
    alert(`The ${this.name} says ${this.noise}!`)
  }
}