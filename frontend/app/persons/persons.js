'use strict';

angular.module('myApp.persons', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/persons', {
    templateUrl: 'persons/persons.html',
    controller: 'PersonsCtrl'
  });
}])

.controller('PersonsCtrl', function($http, $scope) {
  function init() {
    $http.get("api/persons/").then(function(data){
      $scope.remoteData = data;
    });
  }
  function deletePerson(id) {
    $http.delete("api/persons/").then(function(){
      Materialize.toast("Deleted");
      init();
    })
  }

  $scope.delete = function(id) {
    if (id instanceof Number) {
      deletePerson(id);
    } else {
      deletePerson(id._id);
    }
  }

  init();
});