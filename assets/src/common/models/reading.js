angular.module('models.reading', ['lodash', 'services', 'sails.io',])
.service('ReadingModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {
    this.getSome = function(limit, skip, sort, user) {
        var query = {params:{limit:limit, skip:skip, sort: sort, user:user}};
        var url = utils.prepareUrl('reading');
        return $sailsSocket.get(url, query).then(success, error);
    };
    this.create = function(newModel) {
        var url = utils.prepareUrl('reading');
        return $sailsSocket.post(url, newModel).then(success, error);
    };
    var success = function(response) {return response.data;};
    var error = function(error) {console.log(error);};
}]);