angular.module('doggyBook', [
  'doggyBook.services',
  'doggyBook.auth',
  'doggyBook.profile',
  'doggyBook.search',
  'doggyBook.landing',
  'ngRoute'
])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/landing', {
      templateUrl: '/landing/landing.html',
      controller: 'LandingController'
    })
    .when('/signin', {
      templateUrl: 'auth/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'auth/signup.html',
      controller: 'AuthController'
    })
    .when('/profiles/', {
      templateUrl: 'profile/profile.html',
      controller: 'ProfController',
      authenticate: true
    })
    .when('/search', {
      templateUrl: 'dashboard/search.html',
      controller: 'SearchController',
      authenticate: true
    })
    .otherwise({
      redirectTo: '/landing'
    });

   $httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function ($window) {

  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.doggyBook');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, Auth) {

  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/signin');
    }
  });
});
