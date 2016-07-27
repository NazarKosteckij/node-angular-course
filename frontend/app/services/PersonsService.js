'use strict';

angular.module('myApp')

.service('PersonsService', function($q, $http) {
    function _getAll(){
        return  $http.get("api/persons/");
    }
    function _deletePerson(id) {
       return $http.delete("api/persons/" + id);
    }

    function _createPerson(person) {
        return $http.post("api/persons/", person);
    }

    return {
        add: _createPerson,
        getAll: _getAll,
        delete: _deletePerson,
        getFriends: _getAll
    }
});
