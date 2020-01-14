angular.module( 'inspire.order', [])
.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'order', {
		url: '/order/:id',
		views: {
			"main": {
				controller: 'OrderCtrl',
				templateUrl: 'order/index.tpl.html'
			}
		}
	});
}])
.controller( 'OrderCtrl', [ '$scope', 'titleService', function OrderController( $scope, titleService ) {
	titleService.setTitle('Order | Inspiro');
}]);