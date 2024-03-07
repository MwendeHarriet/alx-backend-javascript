import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors === 'number') this.new_floors = floors;
  }

  get floors() {
    return this.new_floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.new_floors} floors`;
  }
}
