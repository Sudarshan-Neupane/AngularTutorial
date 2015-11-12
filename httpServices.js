var app = angular.module('mainApp',[]);
app.controller('peopleCtrl',function($scope,$http){
    $http.get('httpDatabase.json')
            .success(function(response){
              $scope.persons = response.records;  
    })
});


