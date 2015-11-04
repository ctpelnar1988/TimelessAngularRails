
var myApp = angular.module('myApp', []);



myApp.controller("BlogController", ['$scope', '$http', function($scope, $http){
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
}]);


myApp.controller("")

// Filter For Recent Months
myApp.filter('recentMonths', [function() {
    return function(array) {
        var results   = [],
            today     = new Date(),
            thisDay   = today.getDate(),
            thisMonth = (today.getMonth() + 1),
            lastMonth = today.getMonth(),
            thisYear  = today.getFullYear();

        angular.forEach(array, function(item, index) {
           if (item.month_id === thisMonth && item.year_id === thisYear && item.day_id <= thisDay) {
               this.push(item);
           } else if (item.month_id === lastMonth && item.year_id === thisYear ){
              this.push(item);
           }
        }, results);

        return results;
    };
}]);

// No Future Dates Displayed
myApp.filter('xFutureDates', [function() {
    return function(array) {
        var results   = [],
            today     = new Date(),
            thisDay   = today.getDate(),
            thisMonth = (today.getMonth() + 1),
            thisYear  = today.getFullYear();

        angular.forEach(array, function(item, index) {
           if (item.month_id >= thisMonth && item.year_id === thisYear && item.day_id > thisDay) {
            return null;
           } else if(item.month_id > thisMonth && item.year_id >= thisYear || item.year_id > thisYear){
            return null
           } else {

            this.push(item);
           }
        }, results);

        return results;
    };
}]);

// ARCHIVES: BY MONTH
// Blog By Date
myApp.filter('blogByDate', [function() {
    return function(array, date) {

        var results   = []

        angular.forEach(array, function(item, index) {
           if (item.date == date) {
            this.push(item);
           }
        }, results);

        return results;
    };
}]);

// Blog By Month and Year
myApp.filter('blogByMonthYear', [function() {
    return function(array, month_year) {

        var results   = []

        angular.forEach(array, function(item, index) {
           if (item.month_year == month_year) {
            this.push(item);
           }
        }, results);

        return results;
    };
}]);

// Blog By Category
myApp.filter('blogByCategory', [function() {
    return function(array, categories) {

        var results   = []

        angular.forEach(array, function(item, index) {
           if (item.category.includes(categories)) {
            this.push(item);
           }
        }, results);

        return results;
    };
}]);



