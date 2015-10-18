
var myApp = angular.module('myApp', []);

myApp.controller("BlogController", function MyController($scope, $http){
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
            thisYear  = today.getFullYear();

        angular.forEach(array, function(item, index) {
           if (item.month_id === lastMonth || item.month_id === thisMonth && item.year_id === thisYear && item.day_id <= thisDay) {
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
            lastMonth = today.getMonth(),
            thisYear      = today.getFullYear();

        angular.forEach(array, function(item, index) {
           if (item.month_id === thisMonth && item.year_id === thisYear && item.day_id > thisDay) {
            null;
           } else {

            this.push(item);
           }
        }, results);

        return results;
    };
}]);

// OCTOBER 2015
myApp.filter('onlyOctober2015', [function() {
    return function(array) {
        var results   = [],
            today     = new Date(),
            thisMonth = (today.getMonth() + 1),
            thisYear  = today.getFullYear();

        angular.forEach(array, function(item, index) {
           if (item.month_id === 10 && item.year_id === thisYear) {
            this.push(item);
           }
        }, results);

        return results;
    };
}]);

// SEPTEMBER 2015
myApp.filter('onlySeptember2015', [function() {
    return function(array) {
        var results   = [],
            today     = new Date(),
            thisMonth = (today.getMonth() + 1),
            thisYear      = today.getFullYear();

        angular.forEach(array, function(item, index) {
           if (item.month_id === 9 && item.year_id === thisYear) {
            this.push(item);
           }
        }, results);

        return results;
    };
}]);

// AUGUST 2015
myApp.filter('onlyAugust2015', [function() {
    return function(array) {
        var results   = [],
            today     = new Date(),
            thisMonth = (today.getMonth() + 1),
            thisYear      = today.getFullYear();

        angular.forEach(array, function(item, index) {
           if (item.month_id === 8 && item.year_id === thisYear) {
            this.push(item);
           }
        }, results);

        return results;
    };
}]);

// JULY 2015
myApp.filter('onlyJuly2015', [function() {
    return function(array) {
        var results   = [],
            today     = new Date(),
            thisMonth = (today.getMonth() + 1),
            thisYear      = today.getFullYear();

        angular.forEach(array, function(item, index) {
           if (item.month_id === 7 && item.year_id === thisYear) {
            this.push(item);
           }
        }, results);

        return results;
    };
}]);

// JUNE 2015
myApp.filter('onlyJune2015', [function() {
    return function(array) {
        var results   = [],
            today     = new Date(),
            thisMonth = (today.getMonth() + 1),
            thisYear      = today.getFullYear();

        angular.forEach(array, function(item, index) {
           if (item.month_id === 6 && item.year_id === thisYear) {
            this.push(item);
           }
        }, results);

        return results;
    };
}]);

// MAY 2015
myApp.filter('onlyMay2015', [function() {
    return function(array) {
        var results   = [],
            today     = new Date(),
            thisMonth = (today.getMonth() + 1),
            thisYear      = today.getFullYear();

        angular.forEach(array, function(item, index) {
           if (item.month_id === 5 && item.year_id === thisYear) {
            this.push(item);
           }
        }, results);

        return results;
    };
}]);

// OCTOBER 2014
myApp.filter('onlyOctober2014', [function() {
    return function(array) {
        var results   = [],
            today     = new Date(),
            thisMonth = (today.getMonth() + 1),
            lastYear      = today.getFullYear() - 1;

        angular.forEach(array, function(item, index) {
           if (item.month_id === 10 && item.year_id === lastYear) {
            this.push(item);
           }
        }, results);

        return results;
    };
}]);

// SEPTEMBER 2014
myApp.filter('onlySeptember2014', [function() {
    return function(array) {
        var results   = [],
            today     = new Date(),
            thisMonth = (today.getMonth() + 1),
            lastYear      = today.getFullYear() - 1;

        angular.forEach(array, function(item, index) {
           if (item.month_id === 9 && item.year_id === lastYear) {
            this.push(item);
           }
        }, results);

        return results;
    };
}]);

// AUGUST 2014
myApp.filter('onlyAugust2014', [function() {
    return function(array) {
        var results   = [],
            today     = new Date(),
            thisMonth = (today.getMonth() + 1),
            lastYear      = today.getFullYear() - 1;

        angular.forEach(array, function(item, index) {
           if (item.month_id === 8 && item.year_id === lastYear) {
            this.push(item);
           }
        }, results);

        return results;
    };
}]);

// JULY 2014
myApp.filter('onlyJuly2014', [function() {
    return function(array) {
        var results   = [],
            today     = new Date(),
            thisMonth = (today.getMonth() + 1),
            lastYear      = today.getFullYear() - 1;

        angular.forEach(array, function(item, index) {
           if (item.month_id === 7 && item.year_id === lastYear) {
            this.push(item);
           }
        }, results);

        return results;
    };
}]);

// JUNE 2014
myApp.filter('onlyJune2014', [function() {
    return function(array) {
        var results   = [],
            today     = new Date(),
            thisMonth = (today.getMonth() + 1),
            lastYear      = today.getFullYear() - 1;

        angular.forEach(array, function(item, index) {
           if (item.month_id === 6 && item.year_id === lastYear) {
            this.push(item);
           }
        }, results);

        return results;
    };
}]);

// MAY 2014
myApp.filter('onlyMay2014', [function() {
    return function(array) {
        var results   = [],
            today     = new Date(),
            thisMonth = (today.getMonth() + 1),
            lastYear      = today.getFullYear() - 1;

        angular.forEach(array, function(item, index) {
           if (item.month_id === 5 && item.year_id === lastYear) {
            this.push(item);
           }
        }, results);

        return results;
    };
}]);












