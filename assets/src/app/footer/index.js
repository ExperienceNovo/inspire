angular.module( 'inspire.footer', [])
.controller( 'FooterCtrl', ['$scope', function FooterCtrl( $scope ) {
   	$scope.date = new Date();
}])