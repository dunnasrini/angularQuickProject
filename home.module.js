(function(module) {
    
    module.config(function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home/:deepLinkId?',
            views: {
                "main": {
                    controller: 'HomeController as model',
                    templateUrl: 'routes/home/home.tpl.html'
                }
            },
            data:{ pageTitle: 'Home' }
        });
    });
    
}(angular.module('MethodHub.home', [
    'ui.router'
])));
