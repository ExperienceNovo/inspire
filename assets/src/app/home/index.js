angular.module( 'inspire.home', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		}
	});
})

.controller( 'HomeCtrl', [ '$http', '$scope', 'titleService', function HomeController( $http, $scope, titleService ) {
	titleService.setTitle('inspire');
}]);