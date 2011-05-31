function index (req, res) {
	res.render('index.jade');
}

module.exports = {
	'/': index
};
