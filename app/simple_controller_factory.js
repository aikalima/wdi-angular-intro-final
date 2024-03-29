// Generated by CoffeeScript 1.6.3
var SimpleController, WDI, demoApp;

WDI = WDI || {};

demoApp = angular.module("demoApp", ['WDI.filters', 'WDI.directives']);

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

demoApp.factory('Student', function() {
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
  factory.all = function() {
    return students;
  };
  return factory;
});

SimpleController = function($scope, Student) {
  var d;
  $scope.students = Student.all();
  $scope.addStudent = function() {
    return $scope.students.push({
      name: $scope.newStudent.name,
      city: $scope.newStudent.city
    });
  };
  $scope.noStudents = $scope.students.length === 0;
  d = new Date();
  d.setDate(d.getDate() - 1);
  $scope.aDate = d;
  $scope.berlin_address = {
    addressLine1: 'Motz Strasse 29',
    addressLine2: '',
    city: 'Berlin',
    state: 'Brandenburg',
    postalCode: '10781',
    country: 'Germany'
  };
  return $scope.sf_address = {
    addressLine1: '714 Guerrero',
    addressLine2: '',
    city: 'San Francisco',
    state: 'CA',
    postalCode: '94110',
    country: 'USA'
  };
};

demoApp.controller("SimpleController", SimpleController);
