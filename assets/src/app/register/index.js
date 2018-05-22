angular.module( 'inspire.register', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'register', {
		url: '/register',
		views: {
			"main": {
				controller: 'RegisterCtrl',
				templateUrl: 'register/index.tpl.html'
			}
		}
	});
}])

.controller( 'RegisterCtrl', [ '$scope', 'titleService', function RegisterController( $scope, titleService ) {
	titleService.setTitle('Register | inspiro');
}]);