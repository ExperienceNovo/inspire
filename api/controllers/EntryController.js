module.exports = {
	get: async function(req, res) {
		console.log('sup')
		var models = await Entry.find({user:req.query.user}).limit(req.query.limit).skip(req.query.skip).sort(req.query.sort)
		Entry.subscribe(req, models);
		res.json(models);
	},
	create: async function (req, res) {
		var model = {
			reading: req.param('reading'),
			user: req.param('user'),
		};
		var reading = await Entry.create(model)
		Entry.publishCreate(reading);
		res.json(reading);
	},
};
