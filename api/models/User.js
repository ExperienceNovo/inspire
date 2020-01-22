module.exports = {
    attributes: {
        username: {type: 'string', required: true, unique: true},
        email: {type: 'string', required: true, unique: true},
        firstName: {type: 'string'},
        lastName: {type: 'string'},
        passports : { collection: 'Passport', via: 'user' }
    }
};