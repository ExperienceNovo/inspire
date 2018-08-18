/**
* Reading.js
*/

module.exports = {

	attributes: {
        user: {
            model: 'user'
        },
        reading: {
            type: 'integer',
            required: true,
        },
       
    },

    getOne: function(id) {
        return Reading.findOne(id)
        .then(function (model) {
            return [model];
        });
    }
    
};
