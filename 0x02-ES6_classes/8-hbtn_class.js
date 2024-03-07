export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') this.new_size = size;
    if (typeof location === 'string') this.new_location = location;
  }

  toString() {
    return this.new_location;
  }

  valueOf() {
    return this.new_size;
  }
}
