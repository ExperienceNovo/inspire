module.exports = {
    logout: function (req, res) {req.logout(); res.redirect('/');},
    provider: function (req, res) {passportApp.endpoint(req, res);},
    callback: function (req, res) {
        passportApp.callback(req, res, function (err, user) {
            req.login(user, function (err) {
                if (err) {res.redirect('/login');}
                else {console.log('currently logged in user is: ' + req.user.username); req.session.user = req.user; req.session.authenticated = true; res.redirect('/');}
            });
        });
    }
};
