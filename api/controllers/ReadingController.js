/**
 * ReadingController
 *
 */
 
module.exports = {

	getSome: function(req, res) {
		Reading.find({user:req.query.user})
		.limit(req.query.limit)
		.skip(req.query.skip)
		.sort(req.query.sort)
		.then(function(models) {
			Reading.subscribe(req, models);
			res.json(models);
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
