'use strict';
angular.module('postManagerApp').
factory('PostsService',['$rootScope','$http','$q','POSTSERVICEURL', function($rootScope,$http,$q,POSTSERVICEURL){
   
   var posts=[];

   var removePost=function(item){
     return $http.delete(POSTSERVICEURL+item.id,JSON.parse(JSON.stringify(item))).then(function(){
          for(var i=0; i<posts.length;i++){
            if(item.id==posts[i].id){
              posts.splice(i,1);

            }
          }
      })
   }   
   var savePost=function(item){
      
        if(item.id==undefined){
        	item.id=posts.length+1;
        	posts.push(item);

        return $http({
        method: "POST",
        url: POSTSERVICEURL,
        data: JSON.parse(JSON.stringify(item))
        });

        }
        else{

        	for(var i=0; i<posts.length;i++){
        		if(item.id==posts[i].id){
        			posts[i]=item;
              return $http.put(POSTSERVICEURL+item.id,JSON.parse(JSON.stringify(item)));
        		}
        	}

        }

        return;
        
   };
   var getPosts=function(){
   	 return posts;
   }



   return{

     savePost:function(item){
         return savePost(item);
     },
     getPosts:function(){
       return getPosts();
     },
     removePost:function(item){
       return removePost(item);
     },
     listPosts:function(url){
      var deferred = $q.defer();

       $http.get(url).then(function(response){
          deferred.resolve(response.data);
          posts=response.data;
       })	
       return deferred.promise;
     }


   }
 



}]);


