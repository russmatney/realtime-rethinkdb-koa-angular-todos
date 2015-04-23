import r from "./rethinkdb";

export default class TodoController {
  constructor(options) {
    this.options = options;
  }

  *list(next) {
    this.body = yield r.table('todos');
    this.status = 200;
    yield next;
  }
}

