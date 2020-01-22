angular.module('models.entry', ['lodash', 'services', 'sails.io',])
.service('EntryModel', ['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {
    this.get = function(limit, skip, sort, user) {
        var query = {params:{limit:limit, skip:skip, sort: sort, user:user}};
        var url = utils.prepareUrl('entry');
        return $sailsSocket.get(url, query).then(success, error);
    };
    this.create = function(newModel) {
        var url = utils.prepareUrl('entry');
        return $sailsSocket.post(url, newModel).then(success, error);
    };
    var success = function(response) {return response.data;};
    var error = function(error) {console.log(error);};
}]);