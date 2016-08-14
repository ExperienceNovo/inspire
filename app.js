/**
 * app.js
 *
 */

// Ensure we're in the project directory, so relative paths work as expected
// no matter where we actually lift from.
process.chdir(__dirname);

// Ensure a "sails" can be located:
(function() {
  var sails;
  try {
    sails = require('sails');
  } catch (e) {
    return;
  }

  // Try to get `rc` dependency
  var rc;
  try {
    rc = require('rc');
  } catch (e0) {
    try {
      rc = require('sails/node_modules/rc');
    } catch (e1) {
      rc = function () { return {}; };
    }
  }



  /*var Twit = require('twit');
  var T = new Twit({
    consumer_key: '5BfirKUHNlxlRFCjxHc6mwXCQ',
    consumer_secret: '7BjT3oydCmK3h3YcZiQWDe86vkapBH7Y47BtUVaUEMO9fWOcFK',
    access_token: '504734992-qwYz5OkwyaYm46K7FOe008QaVam3WtwQ2VwOymkH',
    access_token_secret: 'ALAQecZSR8QgeQ2lOsB8lut5EzIieQhS4zE8b4uHzar9K'
  });

  T.get('followers/ids', { screen_name: 'troverman' },  function (err, data, response) {
    //console.log(data.ids)
    for (x in data.ids){
      //console.log(data.ids[x]);
      T.get('followers/ids', { user_id: data.ids[x] },  function (err, data1, response) {
        console.log(data.ids[x] + '---' + data1)
      });
    }
  });*/


  // Start server
  sails.lift(rc('sails'));
})();
