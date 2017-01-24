angular.module('doggyBook.profile', [])

.controller('ProfController', function ($scope, Prof) {
  // userID identifies the given user
  $scope.userID = {};
  // data object stores all of the info for the user from the db
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
