'use strict';
angular.module('postManagerApp').
factory('AlertService',['$rootScope', function($rootScope){
   
   var confirmMessage=function(message){
      if (confirm(message) == true) {
         $rootScope.$emit('removePost');
      }
   }
   var alertMessage=function(message){
      alert(message);
   }



   return{

     confirmMessage:function(message){
         confirmMessage(message);
     },
     alertMessage:function(message){
        alertMessage(message);
     }

   }
 



}]);

