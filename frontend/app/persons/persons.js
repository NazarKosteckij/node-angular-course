'use strict';

angular.module('myApp.persons', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/persons', {
    templateUrl: 'persons/persons.html',
    controller: 'PersonsCtrl'
  });
}])

.controller('PersonsCtrl', ['$scope','PersonsService', function($scope, PersonsService) {

  $scope.person = {
    firstName:"",
    lastName:"",
    email:""
  };

  $scope.persons = [{firstName:'ds', lastName:'asd'}, {firstName:'ds', lastName:'asd'}, {firstName:'ds', lastName:'asd'}];

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

  $scope.showModal = function () {
    $('#modal1').openModal();
  };

  init();
}]);