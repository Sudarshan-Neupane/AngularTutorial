var app = angular.module('mainApp',[]);
app.controller('peopleCtrl',function($scope,$http){
    $http.get('httpDatabase.json')
            .success(function(response){
              $scope.persons = response.records;  
    })
});
app.controller('randomController',function($scope){
    $scope.myRandomNumber = Math.random();
//    document.querySelectory('input').addEventListener('click',function(){
//        console.log('button clicked');
//        $scope.myRandomNumber =Math.random();
//        $scope.$digest();
//    },false)
});


