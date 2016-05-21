'use strict';

angular.module('postManagerApp').
controller('listCtrl',['$rootScope','$scope','PostsService','AlertService','listPosts','$timeout',function($rootScope,$scope,PostsService,AlertService,listPosts,$timeout){

 
 var selectedPost;

 $scope.post={

 };

 $scope.delete = function(post){
    selectedPost=post;
    AlertService.confirmMessage('Are you sure you want to delete the post?');
 }
 var update=function(){
    $scope.listPosts = PostsService.getPosts();
 } 


 var init = function(){
    $scope.listPosts = listPosts;
     // $rootScope.$on('updatePost',function(event){
     //   update();
     // });
     $rootScope.$on('removePost',function(event){
       PostsService.removePost(selectedPost).then(function(){
        $timeout(function(){AlertService.alertMessage('Post removed successfully');},500);
       });
       update();
     })      
};

    init();

}])


