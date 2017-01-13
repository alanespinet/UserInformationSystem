app.controller('getUserInfoController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
                var users = response.data;
                for(auser in users) {
                  var user = users[auser];
                  if(user.id === parseInt($routeParams.id))
                    $scope.selectedUser = user;
                }
            },
            function(error) {
                return error;
            });
}]);
