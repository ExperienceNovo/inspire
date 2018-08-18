angular.module('models.order', ['lodash', 'services', 'sails.io',])

.service('OrderModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {

    this.create = function(newModel) {
        var url = utils.prepareUrl('order');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
}]);