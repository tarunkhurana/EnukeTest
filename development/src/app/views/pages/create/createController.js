'use strict';

angular.module('postManagerApp').
controller('createCtrl',['$rootScope','$scope','PostsService','$location','AlertService',function($rootScope,$scope,PostsService,$location,AlertService){
  $scope.submitform=false;
 $scope.save = function(post){
     $scope.submitform=true;
     AlertService.alertMessage('Post is submitting...');
 	 PostsService.savePost(post).then(function(data){
       $location.path('/',false);
       AlertService.alertMessage('Post submitted successfully');
       $rootScope.$emit('updatePost');
     });
     
 };

 var reset=function(){

 	$scope.post={
 		title:'',
 		body:''
 	}
 }

 var init=function(){
   if(PostsService.getPosts().length==0){
    	$location.path('/',false);
   }
   else{
   	 reset();
   }
    
 }

 init();


}])


