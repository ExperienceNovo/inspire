//CRE8.PASSPORT.LOCAL
const bcrypt = require('bcryptjs');
const validator = require('validator');

exports.register = function (req, res, next) {

    console.log('LOCAL REGISTER');

    var newMember = {
        email:req.param('email'),
        username:req.param('username'),
    };

    //HAK
    newMember.balance = {cre8:8, UNIVERSALTOKEN:1};

    if (!newMember.email) {return next(new Error('No email was entered.'));}
    if (!newMember.username) {return next(new Error('No username was entered.'));}
    if (!req.param('password')) {return next(new Error('No password was entered.'));}

    //_id???
    User.create(newMember).exec(function(err, user) {
        console.log(user);
        Passport.create({protocol : 'local', password : req.param('password'), user: user._id.toString()}).exec(function(err, passport) {
            if (err) {console.log('error', err); }
            else{next(null, user);}
        });
    });

};

exports.connect = function (req, res, next) {
    var user = req.user
    var password = req.param('password');
    Passport.findOne({protocol : 'local', user: user.id}, function (err, passport) {
        if (err) {return next(err);}
        if (!passport) {
            Passport.create({protocol : 'local', password : password, user: user._id.toString()}, function (err, passport) {
                next(err, user);
            });
        }
        else {next(null, user);}
    });
};

exports.login = function (req, identifier, password, next) {
    var isEmail = validator.isEmail(identifier)
    var query = {};
    if (isEmail) {query.email = identifier;}
    else {query.username = identifier;}
    User.findOne(query, function (err, user) {
        if (err) {return next(err);}
        if (!user) {
            if (isEmail) {console.log('error', 'Error.Passport.Email.NotFound');} 
            else {console.log('error', 'Error.Passport.Username.NotFound');}
            return next(null, false);
        }
        Passport.findOne({protocol : 'local', user: user.id}, function (err, passport) {
            if (passport) {
                bcrypt.compare(password, passport.password, function (err, res) {
                 if (err) {return next(err);}
                    if (!res) {return next(null, false);} 
                    else {return next(null, user);}
                });
            }
            else {return next(null, false);}
        });
    });
};