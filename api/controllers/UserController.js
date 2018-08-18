/**
 * UserController
 */

module.exports = {

	create: function (req, res) {
		var model = {
			username: req.param('username'),
			email: req.param('email'),
			firstName: req.param('firstName')
		};
		User.create(model)
		.exec(function(err, model) {
			if (err) {
				return console.log(err);
			}
			else {
				User.publishCreate(model.toJSON());
				res.json(model);
			}
		});
	}
};