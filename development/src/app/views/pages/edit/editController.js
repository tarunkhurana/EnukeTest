'use strict';

angular.module('postManagerApp').
controller('editCtrl',['$rootScope','$scope','$routeParams','PostsService','AlertService','$location','$filter',function($rootScope,$scope,$routeParams,PostsService,AlertService,$location,$filter){
  $scope.submitform=false;
 $scope.save = function(item){
 	$scope.submitform=true;
 	 AlertService.alertMessage('Post is updating...');
     PostsService.savePost(item).then(function(data){
           $location.path('/',false);
           AlertService.alertMessage('Post updated successfully');
           $rootScope.$emit('updatePost');
     });
 };

 var init = function(){
    if(PostsService.getPosts().length==0){
    	$location.path('/',false);
   }
   else{
   	   var id = $routeParams.id;
       $scope.post = $filter('filter')(PostsService.getPosts(), {id: id})[0];     

   }
};

    init();

}])


