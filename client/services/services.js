angular.module('doggyBook.services', [])

.factory('Auth', function ($http, $location, $rootScope, $window) {

  var signin = function (user) {
    console.log('in services.js auth factory: user: ', user);
    return $http({
      method: 'POST',
      url: '/api/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    //note that we might need to combine this with Prof.newProf below
    return $http({
      method: 'POST',
      url: '/api/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.doggyBook');
  };

  var signout = function () {
    console.log('services.js signing out!');
    $window.localStorage.removeItem('com.doggyBook');
    $window.localStorage.setItem('isSignedIn', false);
    $rootScope.isSignedIn = false;
    $location.path('/signin');
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
})

.factory('Prof', function ($http, $location, $window) {

  var showProf = function (userName) {
    console.log('showProf services userName: ', userName)
    return $http({
      method: 'GET',
      url: 'api/profiles/' + userName

    })
    .then(function (resp) {
      console.log('response data in Prof factory: ', resp);
      return resp;
    });
  };

  return {
    showProf: showProf
  };
})

.factory('Search', function ($http, $location, $window) {

  var getAllUsers = function (query) {
    //this function should query all profs from DB, send to search.html and
    return $http({
      method: 'POST',
      url: '/api/search',
      data: query
    })
    .then(function (resp) {
      console.log('in Search factory, http request resolved');
      return resp;
    });
  };
  var getProf = function (userName) {
    // $scope.userName = userName
    console.log('in services.js getProf: ', $scope);
    console.log('getProf services userName: ', userName);
    return $http({
      method: 'GET',
      url: 'api/profiles/' + userName,
    })
    .then(function (resp) {
      console.log('response data in Prof factory: ', resp);
      return resp;
    });
  };

  return {
    getAllUsers: getAllUsers,
    getProf: getProf
  };
});
