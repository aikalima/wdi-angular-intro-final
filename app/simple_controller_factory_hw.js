// Generated by CoffeeScript 1.6.3
var SimpleController, demoApp;

demoApp = angular.module("demoApp", []);

demoApp.config(function($routeProvider) {
  return $routeProvider.when("/", {
    controller: "SimpleController",
    templateUrl: "Partials/View1.html"
  }).when("/view2", {
    controller: "SimpleController",
    templateUrl: "Partials/View2.html"
  }).otherwise({
    redirectTo: "/"
  });
});

demoApp.directive("directiveOne", function() {
  return {
    restrict: "E",
    template: "<span> Directive One</span>"
  };
});

demoApp.factory('simpleFactory', function() {
  var factory, students;
  students = [
    {
      name: "Dave",
      city: "San Francisco"
    }, {
      name: "Brian",
      city: "San Francisco"
    }, {
      name: "Lauren",
      city: "New York"
    }, {
      name: "Laura",
      city: "Phoenix"
    }
  ];
  factory = {};
  factory.getStudents = function() {
    return students;
  };
  return factory;
});

SimpleController = function($scope, simpleFactory) {
  $scope.students = simpleFactory.getStudents();
  return $scope.addStudent = function() {
    return $scope.students.push({
      name: $scope.newStudent.name,
      city: $scope.newStudent.city
    });
  };
};

demoApp.controller("SimpleController", SimpleController);
