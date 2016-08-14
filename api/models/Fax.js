/**
* Fax.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        name: {
            type: 'string',
            required: true,
        },
        email: {
            type: 'string',
            required: true,
        },
        faxContent: {
            type: 'string',
            required: true
        },
        legislator: {
            type: 'json',
            required: true
        },
        isApproved: {
            type: 'boolean',
            defaultsTo: false,
        },
        isVerified: {
            type: 'boolean',
            defaultsTo: false,
        }
    },

    getAll: function() {
        return Fax.find()
        .sort({createdAt: 'asc'})
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Fax.findOne(id)
        .then(function (model) {
            return [model];
        });
    }
    
};
