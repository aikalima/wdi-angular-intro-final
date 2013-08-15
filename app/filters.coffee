# A place for all my filters

filtersModule = angular.module('WDI.filters', [])
filtersModule.filter "relativeDate", ->
  (leDate) ->
    return "Today"  if leDate.isToday()
    return "Yesterday" if leDate.isYesterday()
    return leDate.format("{MM}/{dd}/{yy}")
