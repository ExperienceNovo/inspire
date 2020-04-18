//TODO: ES6 imports and exports ? ? 
//import

//CRE8.INSPIRO.DB.ALPHA
var App = {

	//PPL SOMETIMES DO ._ FOR THESE OR PVT 
	//DECOMPOSE IPFS AND ORBIT TO PEER 
	//WORKING HIGHER LEVEL RN 
	'CONNECTION+IPFS': require('ipfs'),
	'CONNECTION+ORBIT-DB': require('orbit-db'),
	'CONNECTION+CRYPTO': require('crypto'),
	'CONNECTION+Q': require('q'),

	//INVER TO MAKE DB APP CENTRIC
	init: async function(){
		var deffered = App['CONNECTION+Q'].defer();
		//START THE PEER ...
		//COMPOSE INTO PEER APP ?
		//TODO: STORE.IDENTITY LINK TO USER .. 
		//THIS IS DB IDENTITY CONTEXT 
		const ipfsOptions = {EXPERIMENTAL: {pubsub: true}};
		const ipfs = new App['CONNECTION+IPFS'](ipfsOptions);
		ipfs.on('error', (e) => console.error(e))
		ipfs.on('ready', async () => {
			//HMMMMMM -- GLOBALS ..  dem connections //CREATE ON DYNAMIC Db APP?
			App.GLOBALDB = await App['CONNECTION+ORBIT-DB'].createInstance(ipfs);
			//COULD PLAY AROUND WITH EVENT EMITTER 
			deffered.resolve({status:'READY'})
			//CONNECT TO SWARM AND ALL .. --> DUPLICATE DB .. 
			//return {status:'READY'}; .... retun the database 
		});
		//GOTTA DO BETTER ..
		return deffered.promise;
	},

	initDb: async function(params){
		//REPLICATE FROM SWARM . . .
		const newDb = await App.GLOBALDB.docs(params);
		console.log('loading...');
		await newDb.load();
		return newDb;
	},

};
module.exports = App;
//export