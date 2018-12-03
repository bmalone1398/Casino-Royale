export class Card {
    id: number;
    suite = '';
    number: number;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
