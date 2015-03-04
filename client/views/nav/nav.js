'use strict';

angular.module('angular-notes')
  .controller('NavCtrl', ['User', '$scope', '$rootScope', '$state', function(User, $scope, $rootScope, $state){
    $scope.logout = function(){
      console.log('running logout');
      User.logout().then(function(response){
        $state.go('home');
        delete $rootScope.email;
      });
    }

  }]);
