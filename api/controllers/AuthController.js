/**
 * Authentication Controller
 *
 */
var AuthController = {

  login: function (req, res) {
    var strategies = sails.config.passport
      , providers  = {};

    // Get a list of available providers for use in your templates.
    Object.keys(strategies).forEach(function (key) {
      if (key === 'local') return;
      providers[key] = {
        name : strategies[key].name
      , slug : key
      };
    });

    // Render the `auth/login.ext` view
    res.view({
      providers : providers
    , errors    : req.flash('error')
    });
  },

  logout: function (req, res) {
    sails.log(req.user.username + ': logged out');
    req.logout();
    res.redirect('/');
  },

  register: function (req, res) {
    res.view({
      errors: req.flash('error')
    });
  },

  provider: function (req, res) {
    passport.endpoint(req, res);
  },

  callback: function (req, res) {
    passport.callback(req, res, function (err, user) {
      req.login(user, function (err) {
        if (err) {res.redirect('/login');}
        // Upon successful login, send the user to the homepage were req.user
        // will available.
        else {
          console.log('currently logged in user is: ' + req.user.username);
          res.redirect('/');
        }
      });
    });
  }

};

module.exports = AuthController;