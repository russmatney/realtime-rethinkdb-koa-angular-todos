import r from "./rethinkdb";

var feed = null;

export default {
  list: function*() {
    try {
      console.log('listing todos');
      this.body = yield r.table('todos');
      this.status = 200;
    } catch(err) {
      this.body = { err: err };
      this.status = 500;
    }
  },

  create: function*() {
    try {
      var newTodo = {
        label: this.request.body.label
      }
      console.log('creating todo');
      console.log(newTodo);
      this.body = yield r.table('todos').insert(newTodo);
      this.status = 201;
    } catch(err) {
      this.body = { err: err };
      this.status = 500;
    }
  },

  delete: function*(id) {
    try {
      console.log('deleting: ' + id);
      this.body = yield r.table('todos').get(id).delete();
      this.status = 200;
    } catch(err) {
      this.body = { err: err };
      this.status = 500;
    }
  },

  todoFeed: function*() {
    if (!feed) {
      feed = yield r.table('todos').changes();
      return feed;
    } else {
      return feed;
    }
  }

}

