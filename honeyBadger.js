export default class honeyBadger {
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
    this.food = 'bees, insects, small animals, bulbs, roots, and bird eggs';
    this.noise = 'growl... squeak!';
  }

  eat() {
    console.log(`You feed the ${this.name} some ${this.food}`)
  }

  speak() {
    alert(`The ${this.name} says ${this.noise}!`)
  }
}