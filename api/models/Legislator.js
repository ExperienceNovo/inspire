module.exports = {
    attributes: {
        first_name: {
          type: 'string',
          require: true,
        },
        last_name: {
          type: 'string',
          require: true,
        },
        state: {
          type: 'string',
          required: true,
        },
        party: {
          type: 'string',
          require: true,
        },
        phone: {
          type: 'string'
        },
        fax: {
          type: 'string'
        },
        email: {
          type: 'email',
          require: true,
        },
        title: {
          type: 'string',
          require: true,
        }

        /*username: {
            type: 'string',
        },
        socialMedia: {
          type: 'json'
        },
        leadership_role: {
          type: 'string'
        },
        term_end: {
          type: 'string'
        },
        term_start: {
          type: 'string'
        },
        bioguide_id: {
          type: 'string'
        },*/
    },

    // getAll: function() {
    //     return User.find()
    //     .then(function (models) {
    //         return [models];
    //     });
    // },
    //
    // getOne: function(id) {
    //     return User.findOne(id)
    //     .then(function (model) {
    //         return [model];
    //     });
    // }
};
