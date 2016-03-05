'use strict';

/* Controllers */

var module = angular.module('uniteEnOr');

module.controller("MainCtrl", function($scope, $resource) {
  var Data =  $resource("js/data.json");

  $scope.localStorage = localStorage;

  if (!localStorage.leftScore) {
    localStorage.leftScore = 0;
  }

  if (!localStorage.rightScore) {
    localStorage.rightScore = 0;
  }

  Data.query(function(q) {
    $scope.questions = q
    $scope.current = -1;
//    $scope.next();
  })

  $scope.toggle = function(index) {
    $scope.visibles[index] = $scope.visibles[index] ? false : true;
  }

  $scope.next = function() {
    $scope.current ++;
    $scope.question = $scope.questions[$scope.current];
    $scope.visibles=[];
  }

  $scope.addLeft = function(count) {
    $scope.localStorage.leftScore = Number($scope.localStorage.leftScore) + count;
  }
  $scope.removeLeft = function(count) {
    $scope.localStorage.leftScore = Number($scope.localStorage.leftScore) - count;
  }
  $scope.addRight = function(count) {
    $scope.localStorage.rightScore = Number($scope.localStorage.rightScore) + count;
  }
  $scope.removeRight = function(count) {
    $scope.localStorage.rightScore = Number($scope.localStorage.rightScore) - count;
  }
});
