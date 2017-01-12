/**
 * Created by dinesh on 10/1/17.
 */
'use strict';
(function(){
    angular.module('crud-app')
        .config(['$stateProvider', '$urlRouterProvider', CrudAppConfig])
        .run(['$rootScope', CrudAppRun]);
    /**
     * @method CrudAppConfig
     * @description function to set the configurations
     * @constructor
     */
    function CrudAppConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/app/home');
        $stateProvider
            .state('app', {
                abstract: true,
                url: '/app',
                templateUrl: '/app/layout/app.html'
            })
            .state('app.home', {
                url: '/home',
                templateUrl: '/app/layout/home.html'
            });
    }

    /**
     * @method CrudAppRun
     * @description function to be called when run
     * @param $rootScope
     * @constructor
     */
    function CrudAppRun($rootScope){
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            //here you can go to whatever state you want, and you also have a lot of information to save if needed
        });
    }
})();