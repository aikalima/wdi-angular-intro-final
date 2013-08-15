WDI = WDI || {};

demoApp = angular.module("demoApp", ['WDI.filters', 'WDI.directives'])

#added for index_v
#Routes
demoApp.config ($routeProvider) ->
  $routeProvider.when("/",
    controller: "SimpleController"
    templateUrl: "Partials/View1.html"
  ).when("/view2",
    controller: "SimpleController"
    templateUrl: "Partials/View2.html"
  ).otherwise redirectTo: "/"

#Factory example
demoApp.factory 'Student', () ->
  # What we really want is to load from server
  students = [
    name: "Dave"
    city: "San Francisco"
  ,
    name: "Brian"
    city: "San Francisco"
  ,
    name: "Lauren"
    city: "New York"
  ,
    name: "Laura"
    city: "Phoenix"
  ]

  #Return an object that implements factory methods
  factory = {}
  factory.all = () ->
    students

  factory

#added for index_c
SimpleController = ($scope, Student) ->
  #added for index_v
  $scope.students = Student.all()

  $scope.addStudent = () ->
    $scope.students.push(
      name: $scope.newStudent.name,
      city: $scope.newStudent.city
      )

  # For standard directive example
  $scope.noStudents = $scope.students.length == 0

  # For filter example
  d = new Date();
  d.setDate(d.getDate() - 1)
  $scope.aDate = d

  # For directive example
  $scope.berlin_address =
    addressLine1: 'Motz Strasse 29'
    addressLine2: ''
    city: 'Berlin'
    state: 'Brandenburg'
    postalCode: '10781'
    country: 'Germany'

  $scope.sf_address =
      addressLine1: '714 Guerrero'
      addressLine2: ''
      city: 'San Francisco'
      state: 'CA'
      postalCode: '94110'
      country: 'USA'

demoApp.controller "SimpleController", SimpleController

# directive example





