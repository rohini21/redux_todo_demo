var API_KEY    = 'blt0e4ab8f7e204c075';
var API_URL    = 'api.built.io';
var RT_API_URL = 'realtime.built.io';

var Built  = require('built.io-browserify');
var app    = Built.App(API_KEY)
              .setHost(API_URL)
              .setRtHost(RT_API_URL)
              .persistSessionWith(Built.Session.LOCAL_STORAGE)
              .enableRealtime()
              .setAdaptor(Built.Adaptor.HTTP);

var TodoApp = module.exports.TodoApp = app;
module.exports.Built   = Built;

export function add_task(data) {
	var Task = TodoApp.Class('todo').Object;
	return Task(data)
	.save()
}

export function get_tasks() {
	var tasks = TodoApp.Class('todo').Query()
	.exec()
	return tasks
}

export function delete_task(id) {
	return TodoApp.Class('todo').Object(id).delete()
}




