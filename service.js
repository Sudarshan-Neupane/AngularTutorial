var app = angular.module('application',[]);

//application .controller;
app.service('random',function(){
   var num = Math.floor(Math.random()*10); 
   this.generate = function(){
       return num;
   }
});
app.controller('app1',function($scope,random){
    $scope.generateRandom = function(){
        $scope.randomNumber = random.generate();
    }
})

