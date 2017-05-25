angular.module( 'inspire.login', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'home', {
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
	titleService.setTitle('inspire');
}]);