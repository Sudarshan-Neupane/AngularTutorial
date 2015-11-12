var app = angular.module('myLanguageApp',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
          .when('/',{
              templete:'welcome user'
          })
                  .when('/anotherPage',{
                      template:'welcome another user'
          })
                  .otherwise({
                      redirectTo:'/'
          })
  
})


