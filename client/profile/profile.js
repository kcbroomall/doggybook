angular.module('doggyBook.profile', [])

.controller('ProfController', function ($scope) {
  // Profiles is a factory in services.js
  $scope.userID = {}
  // grab userID from either landing page or search page
  $scope.data = {};

  var profileRender = function () {
    Prof.showProf($scope.userID)
    // showProfile is a function in the Profiles factory that queries the database for a given userID
      .then(function (profData) {
        $scope.data = profData;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  profileRender();
  });
