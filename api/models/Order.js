/**
* Order.js
*/

module.exports = {

	attributes: {
        email: {
            type: 'string'
        },
        firstName: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        },
        quantity: {
            type: 'string'
        },
        shippingAddress: {
            type: 'string'
        },
        billingAddressAddress: {
            type: 'string'
        },
        card: {
            type: 'json'
        },    
    },

    getOne: function(id) {
        return Reading.findOne(id)
        .then(function (model) {
            return [model];
        });
    }
    
};
