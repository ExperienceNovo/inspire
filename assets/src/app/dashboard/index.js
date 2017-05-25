angular.module( 'inspire.dashboard', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'dashboard', {
		url: '/dashboard',
		views: {
			"main": {
				controller: 'DashboardCtrl',
				templateUrl: 'dashboard/index.tpl.html'
			}
		}
	});
}])

.controller( 'DashboardCtrl', [ '$scope', 'titleService', function HomeController( $scope, titleService ) {
	titleService.setTitle('Dashboard - inspire');
}]);