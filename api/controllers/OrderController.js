//TRANSACTION AND DETAILS ...
//THINK ABOUT TRANSACTION + ITEM + SHIPPING PROTOCOLS RE:CREATE
module.exports = {
	create: async function (req, res) {
		var model = {
			email: req.param('email'),
			firstName: req.param('firstName'),
			lastName: req.param('lastName'),
			quantity: req.param('quantity'),
			shippingAddress: req.param('shippingAddress'),
			billingAddressAddress: req.param('billingAddressAddress'),
			card: {number:req.param('cardNumber'), ccv:req.param('cardCCV'), expiration:req.param('cardExpiration')},

		};
		var model = await Order.create(model);
		Order.publishCreate(order);
		res.json(order)
	},
};
