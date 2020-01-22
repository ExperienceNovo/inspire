
//SELF CONFIG


module.exports = {

	blueprints :{},

	bootstrap: function(cb) {
		initApp.init();
		cb();
	},

	//TODO: REMOVE
	datastores: {
		'default': {
			adapter: 'sails-mongo',
			url: 'mongodb://heroku_b9102lgk:qpo31buktmg6s38j8rdjml0vtc@ds263759.mlab.com:63759/heroku_b9102lgk'
		}
	},

	globals: {
	   _: require('lodash'),
	   async: require('async'),
	   models: true,
	   services: true,
	   sails: true,
	},

	http: {
		middleware: {
			//prerender: require('prerender-node').set('prerenderServiceUrl', 'https://tranquil-reef-73037.herokuapp.com/').set('prerenderToken', 'V8W4l4iLL7BRD4pB8stg'),
			order: [
				'cookieParser',
				'session',
				'bodyParser',
				//'prerender',
				'compress',
				'poweredBy',
				'$custom',
				'router',
				'www',
				'favicon',
			],
		}
	},

	i18n: {},
	log: {level: 'verbose'},

	//REDUCE GLOBAL MODEL DEFINITIONS 
	//APPCECIFIC INHERITANCE 
	//META MODEL APP . . .
	models: {
		fetchRecordsOnUpdate: true,
		fetchRecordsOnCreate: true,
		fetchRecordsOnCreateEach: true,
		migrate: 'safe',
		datastore: 'default',
		attributes: {
			createdAt: { type: 'ref', columnType: 'datetime', autoCreatedAt: true },
			updatedAt: { type: 'ref', columnType: 'datetime', autoUpdatedAt: true },
			id: { type: 'string', columnName: '_id' }
		},
		dataEncryptionKeys: {default: 'V7TZVUpF5WLGg2c2eRVaSx0p3/4Ef11ZujTaY4EVdpY='},
	},

	passport: {
		local: {
			strategy: require('passport-local').Strategy
		}
	},

	policies:{
	  '*': true,
	  '*': [ 'passport' ]
	},

	routes:{

	  'get /': 'HomeController.index',
	  'get /order/:id': 'HomeController.index',
	  'get /login': 'HomeController.index',
	  'get /logout': 'AuthController.logout',
	  'get /register': 'HomeController.index',
	  'post /auth/local': 'AuthController.callback',
	  'post /auth/local/:action': 'AuthController.callback',

	  'get /api/game': 'GameController.get',
	  'post /api/game': 'GameController.create',

	  'get /api/entry': 'EntryController.get',
	  'post /api/entry': 'EntryController.create',

	  'get /api/order': 'OrderController.get',
	  'post /api/order': 'OrderController.create',

  	  'get /api/user': 'UserController.get',
	  'post /api/user': 'UserController.create',
	  
	},

	security:{
		cors:{
			allRoutes: true,
			allowOrigins: '*'
		}
	},
	session:{
	  secret: 'cb5b21a569493ca31834e3827c09b4ed',
	},

	//TODO:NETWORKING ..
	//TODO: SHARE SOCKETS AMONST PEERS
	sockets:{
	  beforeConnect: function(handshake, cb) {
	    return cb(null, true);
	  },
	  afterDisconnect: function(session, socket, cb) {
	    return cb();
	  },
	},

	views:{
	  extension: 'ejs',
	  layout: 'layout',
	  partials: false
	}

}

