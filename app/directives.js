// Generated by CoffeeScript 1.6.3
var directivesModule;

directivesModule = angular.module('WDI.directives', []);

directivesModule.directive('wdiFormattedAddress', function() {
  return {
    restrict: "E",
    replace: true,
    scope: {
      address: '=address'
    },
    templateUrl: 'snippets/formatted_address.html'
  };
});
