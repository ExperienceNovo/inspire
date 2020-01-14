module.exports = {
	get:async function (req, res) {},
	create: async function (req, res) {
		var model = {
			username: req.param('username'),
			email: req.param('email'),
			firstName: req.param('firstName')
		};
		var model = await User.create(model);
		User.publishCreate(model.toJSON());
		res.json(model);	
	}
};