module.exports = {
	get: async function(req, res) {
		var models = await Reading.find({user:req.query.user}).limit(req.query.limit).skip(req.query.skip).sort(req.query.sort)
		Reading.subscribe(req, models);
		res.json(models);
	},
	create: async function (req, res) {
		var model = {
			reading: req.param('reading'),
			user: req.param('user'),
		};
		var reading = await Reading.create(model)
		Reading.publishCreate(reading);
		res.json(reading);
	},
};
