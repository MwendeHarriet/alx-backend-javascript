export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') this.new_name = name;
    if (typeof code === 'string') this.new_code = code;
  }

  toString() {
    return `[object ${this.new_code}]`;
  }
}
