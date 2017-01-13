app.config(function($routeProvider, $locationProvider){

  $routeProvider.when('/', {
    templateUrl: 'listpage/list.html',
    controller: 'getUsersController'
  }).
  when('/users/:id', {
    templateUrl: 'user/userdetails.html',
    controller: 'getUserInfoController'
  })
  .otherwise({
    redirectTo: '/'
  });

});
