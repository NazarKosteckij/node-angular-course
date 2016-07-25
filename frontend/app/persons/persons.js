'use strict';

angular.module('myApp.persons', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/persons', {
    templateUrl: 'persons/persons.html',
    controller: 'PersonsCtrl'
  });
}])

.controller('PersonsCtrl', ['$http', '$scope','PersonsService',function($http, $scope, PersonsService) {

  $scope.person = {
    firstName:"",
    lastName:"",
    email:""
  };

  function init() {
    PersonsService.getAll().then(function(data){
      $scope.remoteData = data;
    });
  }

  function deletePerson(id) {
    PersonsService.delete(id).then(function(){
      Materialize.toast("Deleted", 3000);
      init();
    })
  }

  $scope.delete = function(id) {
    if (id instanceof Number) {
      deletePerson(id);
    } else {
      deletePerson(id._id);
    }
  };

  $scope.addPerson = function () {
    $('#modal1').closeModal();
    PersonsService.add($scope.person).then(function(){
      Materialize.toast("Created", 3000);
      init();
    })
  };

  $scope.showMdoal = function () {
    $('#modal1').openModal();
  };

  init();
}]);