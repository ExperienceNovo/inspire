/**
 * OrderController
 */
 
module.exports = {

	create: function (req, res) {
		var model = {
			email: req.param('email'),
			firstName: req.param('firstName'),
			lastName: req.param('lastName'),
			quantity: req.param('quantity'),
			shippingAddress: req.param('shippingAddress'),
			billingAddressAddress: req.param('billingAddressAddress'),
			card: {number:req.param('cardNumber'), ccv:req.param('cardCCV'), expiration:req.param('cardExpiration')},

		};
		Order.create(model)
		.exec(function(err, order) {
			if (err) {return console.log(err);}
			else {
				Order.publishCreate(order);
				res.json(order)
			}
		});
	},

};
