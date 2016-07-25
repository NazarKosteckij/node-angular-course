'use strict';

angular.module('myApp')

.service("EventsService", ["$http", function($http) {
    function _addEvent(event) {
        return $http.post("api/events/", event);
    }

    function _getAll() {
        return $http.get("api/events/");
    }

    return {
        add: _addEvent,
        getAll: _getAll
    }
}]);