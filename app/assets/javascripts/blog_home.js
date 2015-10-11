var myApp = angular.module('myApp', []);

myApp.controller("MyController", function MyController($scope, $http){
    $http.get("/assets/data.json").success(function(data){
    $scope.artists = data;

      String.prototype.trunc = String.prototype.trunc ||
      function(n){
      // this will return a substring and
      // if its larger than 'n' then truncate and append '...' to the string and return it.
      // if its less than 'n' then return the 'string'
      return this.length>n ? this.substr(0,n-1)+'...' : this;
  };
    $scope.currentDate = new Date;
  });
    $http.get("/assets/data2.json").success(function(data2){
    $scope.artists2 = data2;
  });
});




myApp.filter('thisMonth', [function() {
    return function(array) {
        var results = [],
            today   = new Date(),
            month   = (today.getMonth() + 1).toString(),
            year    = today.getFullYear().toString();

        angular.forEach(array, function(item, index) {
           if (item.month_id === month && item.year_id === year) {
               this.push(item);
           }
        }, results);

        return results;
    };
}]);

