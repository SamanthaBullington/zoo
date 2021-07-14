export default class Animals {
  /**
   * @param {String} name
   * @param {String} type
   * @param {String} color 
   * @param {String} gender
   * @param {String} size
   * @param {Number} weight
   * @param {String} food
   */
  constructor(
    name = '',
    type = '',
    color = '',
    gender = '',
    size = '',
    weight = 0,
    food = '',
  ) {
    this.name = name;
    this.type = type;
    this.color = color;
    this.gender = gender;
    this.size = size;
    this.weight = weight;
    this.food = food;
    this.noise = noise;
  }
}

