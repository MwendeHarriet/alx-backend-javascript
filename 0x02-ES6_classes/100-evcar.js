import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    if (typeof range === 'string') this.new_range = range;
  }

  cloneCar() {
    return new Car();
  }
}
