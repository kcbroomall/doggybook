angular.module('doggyBook.auth', [])

.controller('AuthController', function ($scope, $window, $location, $rootScope, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    console.log('auth.js signin function has been invoked!')
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.doggyBook', token);
        $window.localStorage.setItem('isSignedIn', true);
        $rootScope.isSignedIn = true;
        $location.path('/landing');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.doggyBook', token);
        $window.localStorage.setItem('isSignedIn', true);
        $rootScope.isSignedIn = true;
        $location.path('/landing');
      })
      .catch(function (error) {
        console.log('danger danger!!! auth.js signup function has an error!')
        console.error(error);
      });
  };

  $scope.signout = function () {
    console.log('auth.js signing out!');
    $window.localStorage.setItem('isSignedIn', false);
    $rootScope.isSignedIn = false;
    Auth.signout();
  };
});
