'use strict';

angular.module('angular-notes')
  .controller('UsersCtrl', ['$scope', '$rootScope', '$state', 'User', function($scope, $rootScope, $state, User){
    $scope._ = _;
    $scope.name = _.capitalize($state.current.name);

    $scope.submit = function(user){
      if($scope.name === 'Register'){
        if(user.password === user.confirmPass && (user.email)){
          User.register({email:user.email, password:user.password}).then(function(){
            $state.go('login');
          }, function(){
            user.email = user.password = user.confirmPass = '';
          });
        }else{
          user.password = user.confirmPass = '';
        }
      }else{
        User.login(user).then(function(response){
          $rootScope.email = response.data;
          $state.go('home');
        }, function(){
          user.email = user.password = '';
        });
      }
    };
  }]);
