var app = angular.module('myapp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templeteUrl: 'login.html'
            })
            .when('/login', {
                templateUrl: 'login.html'
            })
            .when('/dashboard', {
                resolve:{
                   "check":function($location,$rootScope){
                       if(!$rootScope.loggedIn){
                           $location.path('/login')
                       }else{
                         template: 'welcome another user'   
                       }
                   } 
                },
               
            })
            .otherwise({
                redirectTo: '/'
            })

})
app.controller('loginCtrl', function ($scope, $location,$rootScope) {
    $scope.submit = function () {
        var name = $scope.username;
        var pass = $scope.password;
        if ($scope.username == 'admin' && $scope.password == 'admin') {
            $rootScope.loggedIn = true;
            $location.path('/dashboard');
        }
    };
});


