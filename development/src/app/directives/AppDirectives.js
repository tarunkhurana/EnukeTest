'use strict';
angular.module('postManagerApp').
 directive('searchModel',function(){
    
    return{
      restrict:'EA',
      transclude:true,
      template:'<ng-transclude></ng-transclude><a id="search-btn" href="" ng-click="toggleSearch(true);"><i class="glyphicon glyphicon-search"</a>',
      link:function(scope,elem,attrs){
           
           var searchTxt=elem.find('#search');
           var searchBtn=elem.find('#search-btn');
           searchTxt.blur(function(){
           	scope.toggleSearch(false);
           })
           scope.toggleSearch=function(open){
              if(open==true){
            	searchBtn.hide();
              	searchTxt.show().css({'padding':'10px','border':'1px solid lightgrey'}).animate({
              		width:'180px'              		
              	},500);
                           
           }
           else{
         	
              	searchTxt.animate({
              		width:'0',
              		padding:'0',
              		border:'0'
              	},500).hide(0,function(){
              		searchBtn.show();
              	})
           }
         }
         


      }

    }


 })