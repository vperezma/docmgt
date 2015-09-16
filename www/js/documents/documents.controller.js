(function(){
  'use strict';

  var app = angular.module('docmgt');

  app.controller('documentsController', function($scope){
    
    $scope.documents = documentsService.all();

  });
}());