// Generated by CoffeeScript 1.6.3
var filtersModule;

filtersModule = angular.module('WDI.filters', []);

filtersModule.filter("relativeDate", function() {
  return function(leDate) {
    if (leDate.isToday()) {
      return "Today";
    }
    if (leDate.isYesterday()) {
      return "Yesterday";
    }
    return leDate.format("{MM}/{dd}/{yy}");
  };
});
