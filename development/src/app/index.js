'use strict';
  angular.module('postManagerApp', [
  'ngRoute'
])
  .constant('POSTSERVICEURL','http://jsonplaceholder.typicode.com/posts/')
  .run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
   
}]).config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/pages/list/list.html',
        controller: 'listCtrl',

        resolve:{
         listPosts:['PostsService','POSTSERVICEURL',function(PostsService,POSTSERVICEURL){

           return PostsService.listPosts(POSTSERVICEURL)

         }]

        }
        
      })
      .when('/posts/create', {
        templateUrl: 'app/views/pages/create/create.html',
        controller: 'createCtrl'
      })
      .when('/posts/edit/:id/', {
        templateUrl: 'app/views/pages/edit/edit.html',
        controller: 'editCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])



