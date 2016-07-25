'use strict';

angular.module('myApp.events', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/events', {
    templateUrl: 'events/events.html',
    controller: 'EventsCtrl'
  });
}])

.controller('EventsCtrl', function($scope, $http) {
  $scope.remoteData = {};

  $scope.getNow = function () {
    return new Date();
  }


  $scope.getRemoteData = function() {
    $http.get("api/markers.json").then(function(data){
      $scope.remoteData = data;
    });
  }

  this._nowTime = new Date();
  $scope.nowTime = this._nowTime;

});