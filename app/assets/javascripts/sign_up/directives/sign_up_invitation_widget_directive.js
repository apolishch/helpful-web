"use strict";
angular.module('helpfuls.signUp.directives').directive('signUpInvitationWidget', ['userInviteService', function(userInviteService){
    return {
        restrict: 'E',
        templateUrl: '/templates/sign_up_invitation_widget.html',
        link: function(scope, elem, attrs){
          scope.invite = function(invitation){

          }
        }
    }
}]);