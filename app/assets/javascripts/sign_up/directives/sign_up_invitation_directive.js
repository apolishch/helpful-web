"use strict";
angular.module('helpful.signUp.directives').directive('signUpInvitation', ['currentUserService', function(currentUserService){
  return {
      restrict: 'E',
      templateUrl: '/templates/sign_up_invitation.html',
      link: function(scope, elem, attrs){
          scope.invitations = [{value: "", invited: false}];
          scope.userAccountId = currentUserService.models.currentUser.account_id;

          scope.submit = function(){

          }
      }

  }
}]);