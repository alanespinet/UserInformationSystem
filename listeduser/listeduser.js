app.directive('listedUser', function() {
  return {
    restrict: 'E',
    scope: { user: '=' },
    templateUrl: 'listeduser/listeduser.html'
  };
});
