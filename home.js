(function(module) {
    
    module.controller("HomeController", function( $scope, globalUiServices ){
        
        var init = function () {
            
            globalUiServices.activeHome();
        };

        init();
    });
 
}(angular.module("MethodHub.home")));