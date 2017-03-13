angular.module('doggyBook.profile', [])

.controller('ProfController', function ($scope, $http, $location, $window, $rootScope, Prof, Auth) {
  // userName identifies the given user
  // profile object stores all of the info for the user from the db
  $scope.profile = {};
  $scope.userName = $scope.userName || 'rj';
  $scope.signout = () => {
    console.log('profile.js signing out!');
    Auth.signout();
  }



  var profileRender = function () {
    Prof.showProf($scope.userName)
      // console.log('$scope.userName :', $scope.userName)
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
