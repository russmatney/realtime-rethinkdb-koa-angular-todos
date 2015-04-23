export default class TodoController {
  constructor(options) {
    this.options = options;
  }

  *list(next) {
    console.log('listing');
    this.status = 200;
    yield next;
  }
}

