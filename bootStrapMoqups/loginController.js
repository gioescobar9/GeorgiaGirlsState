// Code goes here
(function()
{
  var app =  angular.module("loginPage", []);
  
    var loginController =  function ($scope, $location) {
          
          $scope.goTo = function(path){
            $location.path();
          };
    };
    
    app.controller("loginController", loginController);
    
}());