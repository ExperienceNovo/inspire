//CRE8.INSPIRO.READING.ALPH
var App = {

	//STARTING FROM SCRATCH

	//APP-APP CONNECTIONS ... 
	'CONNECTION+DB': require('./../dbApp/dbApp.js'),
	'CONNECTION+CRYPTO': require('crypto'),

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
			//NEED IMPORTS .. 
			//controller: class LoginAnimation extends Component {}
		},
		"reading/:id":{

		}
	},

	//WERE GONNA TRY THIS CHARGED UP 
	//TODO: BOOTSTRAP BUILDER 
	//connections.self.connections.self.params 
	//types
	//dataModels --> MAKE SOME DECISIONS  //WHATS THE SCOPE.. / NAME SPACE ? ... ID --> HASHEM
	//CONNECTION+SELF+DATA+
	'READING+ATTRIBUTES':{
		user: {model: 'user'},
        //what is in a breath ? 
        //length, function(t[amplitude]->data)
        //this is time
        reading: {type: 'integer', required: true},    
    },

	dataModels:[
		{
			type:'READING', //WHATS THE SCOPE.. / NAME SPACE ? ... ID --> HASHEM
			attributes: {
		        user: {model: 'user'},
		        //what is in a breath ? 
		        //length, function(t[amplitude]->data)
		        //this is time
		        reading: {type: 'integer', required: true},    
		    }
		}
    ],

    //BOOTSTRAP APP 
    //OI --> CALLBACKS :0 
    init: async function(){
    	//STATIC PARAMS 
    	//NOT LIKING THE CURCULAR --> SOON UPDATE
    	var dbParams = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(App.dataModels)).digest('hex');
    	
    	//GLOBAL AND LOCAL DB --> WHAT WE WANT :)
    	App['DB'] = await App['CONNECTION+DB'].initDb(dbParams);
    	//REDO MODELS TO EXPOSE DB
		//await db.put()
		console.log(App['DB'])
		const records = App['DB'].get('');
		console.log(records);
    	//CALL DB APP TO CREATE / INSTANTIATE THE APP DATA 
    },
	create:async function(model){
		await App['DB'].put(model);
		return {status:'DONE'};
	},
	get:async function(model){
		//TODO:
		//MODEL / QUERY ex: data.hash == model.hash);
		//var queryObj = {};
		//const records = db.query((data) => queryObj)
		const records =  App['DB'].get('');
		return records;
	},

	//APP IMPORT / OVERRIDE ? 
	'TOKENS+GET':{},
	'TOKENS+CREATE':{},

};
//App.hash = App.import.crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(App)).digest('hex');
module.exports = App;