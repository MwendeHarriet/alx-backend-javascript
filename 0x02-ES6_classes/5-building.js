export default class Building {
  constructor(sqft) {
    if (!typeof sqft === 'number') {
      throw TypeError('Sqft must be a number');
    }
    this.new_sqft = sqft;
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  get sqft() {
    return this.new_sqft;
  }
}
