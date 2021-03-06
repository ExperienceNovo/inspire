angular.module( 'inspire.home', [])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {"main": {controller: 'HomeCtrl', templateUrl: 'home/index.tpl.html'}}
	});
}])
.controller( 'HomeCtrl', ['$interval', '$location', '$timeout', '$scope', 'config', 'EntryModel', 'OrderModel', 'titleService', function HomeController( $interval, $location, $timeout, $scope, config, EntryModel, OrderModel, titleService ) {
	titleService.setTitle('Inspire Breathing');
	$scope.currentUser = config.currentUser;
	$scope.isRunning = false;
	$scope.newOrder = {};
	$scope.newReading = {};
	$scope.readings = [];
	$scope.purchasing = false;
	$scope.time = 0;
	$scope.thresholdTime = 0;

	$scope.createOrder = function(){OrderModel.create($scope.newOrder).then(function(model){$location.path('/order/'+model.id);});};
	$scope.purchase = function(){$scope.purchasing = !$scope.purchasing};

	$scope.timeChart = {
    	chart: {zoomType: 'x',},
        series: [{
			id: 'Decible',
            type: 'spline',
            name: 'Decible',
            data: []
        },{
        	id: 'Volume',
            type: 'area',
            name: 'Air Volume',
            data: []
        }],
        title: {text: ''},
        xAxis: {title: {text: null},},
        yAxis: {
            title: {text: null},
            plotLines: [{color: '#FF0000', width: 2, value: 10}],
        },
        credits: {enabled:false},
    };
    $scope.thresholdChart = {
    	chart: {},
        series: [{
			id: 'Threshhold',
            type: 'column',
            name: 'Threshhold',
            data: [1]
        }],
        title: {text: ''},
        xAxis: {title: {text: null}},
        yAxis: {
            title: {text: null},
            min:0,
            max:100,
            plotLines: [
            	{color: '#FF0000', width: 2, value: 10},
	        	{color: '#FF0000', width: 2, value: 50},
	        	{color: '#FF0000', width: 2, value: 88}
	        ],
        },
        legend: {enabled: false},
        credits: {enabled:false},
    };
	
	//TODO: FACTOR
	if ($scope.currentUser){

		//TEMPLATES / GAMES === 
		$scope.games = [];

		EntryModel.get({limit:100, skip:0, sort:'createdAt DESC', user:$scope.currentUser.id}).then(function(readings){$scope.readings = readings;});
	    $scope.addTime = function() {
			$scope.time++;
			$scope.timeChart.series[0].data.push([$scope.time, $scope.volume*100]);
			$scope.timeChart.series[1].data.push([$scope.time, $scope.volume*Math.random()*100]);
			

			if($scope.time >= 100){$scope.timeChart.series[0].data.shift();$scope.timeChart.series[1].data.shift()}
			//TODO: GRAPH THRESHOLD TIME
			if ($scope.volume*100 > 10){$scope.thresholdTime++; $scope.thresholdChart.series[0].data = [$scope.thresholdTime]}


			else{
				if ($scope.thresholdTime > 10){
					var newReading = {};
					newReading.user = $scope.currentUser.id;
					newReading.time = $scope.thresholdTime;
					newReading.createdAt = new Date();
					//ReadingModel.create($scope.newReading).then(function(){
						$scope.readings.push(newReading);
					//});
				}
				$scope.thresholdTime = 0;
				$scope.thresholdChart.series[0].data = [1];
			}
		};
		//$timeout(function() { $interval($scope.addTime, 100); }, 2000);
	    $scope.start = function(){if (!$scope.isRunning){$interval($scope.addTime, 100);$scope.isRunning=!$scope.isRunning}};
	   	$scope.stop = function(){$scope.isRunning=!$scope.isRunning;};
	    function createAudioMeter(audioContext,clipLevel,averaging,clipLag) {
			var processor = audioContext.createScriptProcessor(512);
			processor.onaudioprocess = volumeAudioProcess;
			processor.clipping = false;
			processor.lastClip = 0;
			processor.volume = 0;
			processor.clipLevel = clipLevel || 0.98;
			processor.averaging = averaging || 0.95;
			processor.clipLag = clipLag || 750;
			processor.connect(audioContext.destination);
			processor.checkClipping = function(){
				if (!this.clipping){return false;}
				if ((this.lastClip + this.clipLag) < window.performance.now()){
					this.clipping = false;
					return this.clipping;
				}
			};
			processor.shutdown = function(){
				this.disconnect();
				this.onaudioprocess = null;
			};
			return processor;
		};
		function volumeAudioProcess( event ) {
			var buf = event.inputBuffer.getChannelData(0);
		    var bufLength = buf.length;
			var sum = 0;
		    var x;
		    for (var i=0; i<bufLength; i++) {
		    	x = buf[i];
		    	if (Math.abs(x)>=this.clipLevel) {
		    		this.clipping = true;
		    		this.lastClip = window.performance.now();
		    	}
		    	sum += x * x;
		    }
		    var rms =  Math.sqrt(sum / bufLength);
			this.volume = Math.max(rms, this.volume*this.averaging);
		    $scope.volume = this.volume;
		};
	    function stream(stream){
			window.AudioContext = window.AudioContext || window.webkitAudioContext;
		    var audioContext = new AudioContext();
			var mediaStreamSource = audioContext.createMediaStreamSource(stream);
			var meter = createAudioMeter(audioContext);
	   		mediaStreamSource.connect(meter);
		};
		function err(err){};
	    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
		navigator.getUserMedia({ audio: true, video: false }, stream, err);
	}
	
}]);