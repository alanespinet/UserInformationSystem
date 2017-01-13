app.controller('getUsersController', ['$scope', '$http', function($scope, $http) {
    $http.get('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
                $scope.users = response.data;
            },
            function(error) {
                return error;
            });
}]);
