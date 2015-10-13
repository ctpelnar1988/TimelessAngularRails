
var myApp = angular.module('myApp', []);

myApp.controller("MyController", function MyController($scope, $http){
  $http.get('/assets/blogs.json').success(function(data){
    $scope.blogs = data;

    String.prototype.trunc = String.prototype.trunc ||
      function(n){
      // this will return a substring and
      // if its larger than 'n' then truncate and append '...' to the string and return it.
      // if its less than 'n' then return the 'string'
      return this.length>n ? this.substr(0,n-1)+'...' : this;
    };

  });
});

myApp.filter('recentMonths', [function() {
    return function(array) {
        var results   = [],
            today     = new Date(),
            thisDay   = today.getDate(),
            thisMonth = (today.getMonth() + 1),
            lastMonth = today.getMonth(),
            year      = today.getFullYear();

        angular.forEach(array, function(item, index) {
           if (item.month_id === lastMonth || item.month_id === thisMonth && item.year_id === year && item.day_id <= thisDay) {
               this.push(item);
           }
        }, results);

        return results;
    };
}]);



myApp.filter('xFutureDates', [function() {
    return function(array) {
        var results   = [],
            today     = new Date(),
            thisDay   = today.getDate(),
            thisMonth = (today.getMonth() + 1),
            year      = today.getFullYear();

        angular.forEach(array, function(item, index) {
           if (item.year_id === year) {
            if (item.month_id <= thisMonth){
              if (item.day_id <= thisDay){
               this.push(item);
              }
            }
           }
        }, results);

        return results;
    };
}]);





