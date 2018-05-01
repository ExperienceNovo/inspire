/**
 * ReadingController
 *
 */
 
module.exports = {

	getSome: function(req, res) {
		Reading.getOne(req.param('id'))
		.spread(function(model) {
			Reading.subscribe(req, model);
			res.json(model);
		});
	},

	create: function (req, res) {
		var model = {
			reading: req.param('reading'),
			user: req.param('user'),
		};
		Reading.create(model)
		.exec(function(err, reading) {
			if (err) {return console.log(err);}
			else {Reading.publishCreate(reading);}
		});
	},

};
