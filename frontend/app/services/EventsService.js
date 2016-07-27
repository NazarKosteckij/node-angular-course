'use strict';

angular.module('myApp')

.service("EventsService", ["$http", function($http) {
    function _addEvent(event) {
        return $http.post("api/events/", event);
    }

    function _getAll() {
        return $http.get("api/events/");
    }

    function _get(id) {
        return $http.get("api/events/" + id);
    }

    return {
        add: _addEvent,
        getAll: _getAll,
        getById: _get
    }
}]);