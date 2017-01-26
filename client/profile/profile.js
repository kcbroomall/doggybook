angular.module('doggyBook.profile', [])

.controller('ProfController', function ($scope, Prof) {
  // userName identifies the given user
  $scope.userName = '';
  // profile object stores all of the info for the user from the db
  $scope.profile = {};

  var profileRender = function () {
    Prof.showProf($scope.userName='rj1')
    // showProfile is a function in the Profiles factory that queries the database for a given userID
      .then(function (profData) {
        console.log('profile.js line 13 profdata: ', profData);
        $scope.profile = profData.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  profileRender();
  });
