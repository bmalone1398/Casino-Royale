export class User {
    id: number;
    username = '';
    category: number;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}

