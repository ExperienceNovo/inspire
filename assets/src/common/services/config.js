angular.module( 'services.config', ['lodash'])
.service('config',['lodash', function(lodash) {
	return {
		siteName: 'inspire',
		siteUrl: '/',
		apiUrl: '/api',
		currentUser: false
	};
}]);