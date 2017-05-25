/**
 * ReadingController
 *
 */
 
module.exports = {

	getOne: function(req, res) {
		Reading.getOne(req.param('id'))
		.spread(function(model) {
			Reading.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	getCount: function(req, res) {
		Reading.count()
		.exec(function(err, faxCount) {
			if (err) {return console.log(err);}
			else {
				Reading.watch(req);
				res.json({ count: faxCount });
			}
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
