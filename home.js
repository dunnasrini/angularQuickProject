(function(module) {
    
    module.controller("HomeController", function( $scope, globalUiServices ){
        
        var init = function () {
            
            globalUices.activeHome();
            //added some information for commit
        };

        init();
        
    });
 
}(angular.module("MethodHub.home")));