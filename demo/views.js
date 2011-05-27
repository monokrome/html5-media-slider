function index (req, res) {
	res.writeHead(200, {
		'Content-type': 'text/plain'
	});

	res.end('HTML5 Media Slider');
}

module.exports = {
	'.*': index
};
