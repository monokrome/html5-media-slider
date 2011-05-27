var http = require('http'),
    views = require('./views'),

    server;

server = http.createServer(function route_request (req, res) {
	var expression, view;

	for (expression in views)
	{
		// If the expression doesn't match, we continue looking for a match.
		if (!RegExp(expression).test(req.URL))
			continue;

		// Otherwise, we call our view and break out of the loop.
		view = views[expression];
		view.apply(this, arguments);

		break;
	}
});

server.listen(8000);
