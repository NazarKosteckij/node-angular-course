'use strict';

angular.module('myApp.events.view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/events/:id', {
        templateUrl: 'events/event-view/event-view.html',
        controller: 'EventViewCtrl'
    });
}])

.controller('EventViewCtrl', ['$scope', '$routeParams', 'EventsService', function($scope, $routeParams, EventsService) {
    const ID = $routeParams.id;
    $scope.event = {};
    function _init() {
         EventsService.getById(ID).then(function (data) {
             $scope.event = data.data;
         });
    }


    _init();
}])
