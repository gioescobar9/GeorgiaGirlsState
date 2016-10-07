// Code goes here
(function()
{
  var app =  angular.module("loginPage", []);
  
    app.controller('loginController', function($scope, $window) {
          
          $scope.goTo = function(path){
            $window.open(path);
          };
    });
    
}());