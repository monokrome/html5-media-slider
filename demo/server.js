var express = require('express'),
    views = require('./views'),

	static_dir = __dirname + '/static/',
	templates_dir = static_dir + 'templates/',

    server,
	expression, view_data,
	method_index, method;

// Create an express server, and a function for rerouting requests to
// the proper view.
server = express.createServer();

// Set up directores for templates, static files, etc.
server.set('views', templates_dir);
server.use(express.static(static_dir));

for (expression in views)
{
	view_data = views[expression];

	if (typeof view_data == 'function')
	{
		view_data = {
			methods: ['GET'],
			handler: view_data
		};
	}

	// Loop through each supported request method for this view, and
	// create a handler for it.
	for (method_index in view_data.methods)
	{
		method = view_data.methods[method_index].toLowerCase();
		server[method](expression, view_data.handler);
	}
}

// Listen on port 8000
server.listen(8000);
