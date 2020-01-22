//CRE8.INSPIRO.INIT.ALPHA
module.exports = {
	//BOOTSTRAP.. BUILDER .. ETC 
	//DYNAMIC PEER BUILDER
	//TODO: LOOP .. import all apps selected to compile 
	init:async function(){

		//TODO: INVERT CORE HOOK LOADER
		console.log('CONTROLLERS', sails.controllers)
		console.log(User, Passport, Entry, Order)

		await dbApp.init();
		//fulfilmentApp.init();
		//gameApp.init();
		//itemApp.init();
		//orderApp.init();
		//passportApp.init();
		passportApp.loadStrategies();
		entryApp.init();

	},


};