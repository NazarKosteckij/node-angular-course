'use strict';

angular.module('myApp.events', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/events', {
    templateUrl: 'events/events.html',
    controller: 'EventsCtrl'
  });
}])

.controller('EventsCtrl', ["$scope", "$http", "EventsService", "PersonsService", function($scope, $http, EventsService, PersonsService) {
  $scope.events = [];
  $scope.invitedPersons = [];
  
  //$scope.person = {firstName: "", lastName: ""};
  $scope.persons = [];

  $scope.event = {
    name: "",
    date: "",
    time: "",
    participants: [{firstName: "", lastName: ""}],
    ovner: ""
  };

  $scope.openModal = function() {
    $('#add-event-modal').openModal();
    $('select').material_select();
  };

  $scope.addEvent = function() {
    $('#add-event-modal').closeModal();
    $scope.event.participants = $scope.invitedPersons;
    EventsService.add($scope.event)
      .then(function() {
        Materialize.toast("Created", 3000);
        _init();
      })
  };

  $scope.viewEvent = function(event) {
     window.location.href ="#!events/" + event._id;
  };

  function _init() {
    PersonsService.getFriends().then(function (data) {
      $scope.avaliablePersons = data.data;
      console.log(data);
    });

    EventsService.getAll().then(function (data) {
      $scope.events = data.data;
      console.log(data);
    })
  }

  _init();
}]);