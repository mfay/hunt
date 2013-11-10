exports.requiresLogin = function(req, res, next) {
	if (req.admin === undefined) {
		req.session.returnTo = req.originalUrl;
		return res.redirect('login');
	}
	next();
};