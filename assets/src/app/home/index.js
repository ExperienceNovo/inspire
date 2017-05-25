angular.module( 'inspire.home', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		}
	});
}])

.controller( 'HomeCtrl', [ '$scope', 'titleService', function HomeController( $scope, titleService ) {
	titleService.setTitle('inspire');
}]);