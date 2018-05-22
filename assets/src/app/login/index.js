angular.module( 'inspire.login', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'login', {
		url: '/login',
		views: {
			"main": {
				controller: 'LoginCtrl',
				templateUrl: 'login/index.tpl.html'
			}
		}
	});
}])

.controller( 'LoginCtrl', [ '$scope', 'titleService', function LoginController( $scope, titleService ) {
	titleService.setTitle('Login | inspiro');
}]);