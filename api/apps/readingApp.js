//CRE8.INSPIRO.READING.ALPHA
var App = {

	//STARTING FROM SCRATCH

	//APP-APP CONNECTIONS ... 
	import:{
		db:require('./dbApp'),
		crypto: require('crypto'),
	},

	routes:{
		"readings":{
			"GET":'App.get()' //PEER NAMESPACE FOR ROUTES AND FXNS
		},
		"reading/:id":{
			"GET":"",
			"POST":""
		}
	},

	//OBJ TREE WITH NAME AS OBJ TREE --> THX TWITTER FOR THE INSIGHT
	views:{
		"readings":{

		},
		"reading/:id":{

		}
	},

	//WERE GONNA TRY THIS CHARGED UP 
	//TODO: BOOTSTRAP BUILDER 
	//connections.self.connections.self.params 
	//types
	//dataModels --> MAKE SOME DECISIONS
	dataModels:[
		{
			type:'READING', //WHATS THE SCOPE.. / NAME SPACE ? ... ID --> HASHEM
			attributes: {
		        user: {model: 'user'},
		        reading: {type: 'integer', required: true},    
		    }
		}
    ],

    //BOOTSTRAP APP 
    //OI --> CALLBACKS :0 
    init: async function(){

    	//STATIC PARAMS 
    	//NOT LIKING THE CURCULAR --> SOON UPDATE
    	var dbParams = App.import.crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(App.dataModels)).digest('hex');
    	
    	//GLOBAL AND LOCAL DB --> WHAT WE WANT :)
    	App.db = await App.import.db.initDb(dbParams);
    	//REDO MODELS TO EXPOSE DB
		//await db.put()
		console.log(App.db)
		const records = App.db.get('');
		console.log(records);
    	//CALL DB APP TO CREATE / INSTANTIATE THE APP DATA 

    },

	create:async function(model){
		await App.db.put(model);
		return {status:'DONE'};
	},
	get:async function(model){

		//TODO:
		//MODEL / QUERY ex: data.hash == model.hash);
		//var queryObj = {};
		//const records = db.query((data) => queryObj)

		const records =  App.db.get('');
		return records;

	},
	
	//APP IMPORT / OVERRIDE ? 
	tokens:{
		get:{

		},
		create:{

		}
	}
};
//App.hash = App.import.crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(App)).digest('hex');
module.exports = App;