'use strict';

angular.module('myApp.events', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/events', {
    templateUrl: 'events/events.html',
    controller: 'EventsCtrl'
  });
}])

.controller('EventsCtrl', ["$scope", "$http", "EventsService", function($scope, $http, EventsService) {
  //$scope.events = [];

  $scope.event = {
    name: "",
    date: "",
    time: "",
    participants: [{firstName: "", lastName: ""}],
    ovner: ""
  };

  $scope.openModal = function() {
    $('#add-event-modal').openModal();
  };

  $scope.addEvent = function() {
    $('#add-event-modal').closeModal();
    EventsService.add($scope.event)
      .then(function() {
        Materialize.toast("Created", 3000);
        _init();
      })
  };

  $scope.viewEvent = function(event) {

  };

  function _init() {
    EventsService.getAll().then(function (data) {
      $scope.events = data.data;
      console.log(data);
    })
  }

  _init();
}]);