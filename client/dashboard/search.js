angular.module('doggyBook.search', [])

.controller('SearchController', function($scope, Search) {
  // the results object should store all of the results of the query; ie all users matching a given query
  $scope.results = [];
  // the query object will include the search parameters
  $scope.query = {};
  $scope.getUsers = function () {
    Search.getAllUsers()
      .then(function(response) {
        $scope.results = response.data;
      })
      .catch(function(error) {
        console.error(error);
      });
  }
});
