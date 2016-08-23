angular.module( 'inspire.about', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'about', {
		url: '/about',
		views: {
			"main": {
				controller: 'AboutCtrl',
				templateUrl: 'about/index.tpl.html'
			}
		}
	});
})

.controller( 'AboutCtrl', ['$http', '$scope', 'titleService', function AboutController( $http, $scope, titleService ) {
	titleService.setTitle('About - inspire');
}]);