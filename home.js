(function(module) {
    
    module.controller("HomeController", function( $scope, globalUiServices ){
        
        var init = function () {
            
            globalUices.activeHome();
            //added some information for commit
            //infor updated in the server
            //added locally one
            //added by srini12
        };

        init();//srini
        
    });
 
}(angular.module("MethodHub.home")));
