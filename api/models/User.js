module.exports = {
    attributes: {
        username: {type: 'string', required: true, unique: true},
        email: {type: 'email', required: true, unique: true},
        firstName: {type: 'string'},
        lastName: {type: 'string'},
        passports : { collection: 'Passport', via: 'user' }
    }
};