/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.details', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('top-hyip', {
                url: '/top-paying-hyip-websites',
                templateUrl: 'app/pages/details/views/top-paying-hyip-websites.html',
                controller: 'TopPayingHyipController',
                controllerAs: 'topHyip'
            }).state('top-mining', {
                url: '/top-paying-mining-websites',
                templateUrl: 'app/pages/details/views/top-paying-mining-websites.html',
                controller: 'TopPayingMiningController',
                controllerAs: 'topMining'
            });
    }


})();
