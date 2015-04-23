export default class TodoController {
  constructor(options) {
    this.options = options;
  }

  *list(next) {
    this.status = 200;
    this.body = [{label: 'item 1'}];
    yield next;
  }
}

