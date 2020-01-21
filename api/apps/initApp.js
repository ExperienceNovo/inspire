//CRE8.INSPIRO.INIT.ALPHA
module.exports = {
	//BOOTSTRAP.. BUILDER .. ETC 
	//DYNAMIC PEER BUILDER
	//TODO: LOOP .. import all apps selected to compile 
	init:async function(){

		await dbApp.init();
		//fulfilmentApp.init();
		//gameApp.init();
		//itemApp.init();
		//orderApp.init();
		//passportApp.init();
		passport.loadStrategies();
		readingApp.init();

	},


};