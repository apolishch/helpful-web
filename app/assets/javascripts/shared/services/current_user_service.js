"use strict";
angular.module('helpful.shared.services').service('currentUserService', ['$resource', function(resource){
  var service = {};
  var models = {};
  models.currentUser = {};
  service.models = models;

  var CurrentUser = resource('/current_user', {});

  service.index = function(){
    CurrentUser.get(function(success, headers){
      models.currentUser = success;
    },
    function(failure){
        //console.debug("TODO: FILL IN ERROR HANDLING");
    });
  }

  service.index();
  return(service);
}]);