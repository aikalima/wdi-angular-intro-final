# A place for all my custom directives
directivesModule = angular.module('WDI.directives', [])

directivesModule.directive 'wdiFormattedAddress', ->
    restrict: "E"
    replace: true
    scope:
      address: '=address'
    templateUrl: 'snippets/formatted_address.html'

