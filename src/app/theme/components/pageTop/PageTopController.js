/* eslint-disable */
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.theme.components').
      controller('PageTopController', PageTopController);

  /** @ngInject */
  function PageTopController() {
    var vm = this;
    vm.date = {};

    vm.init = init;

    function init() {
      vm.date = new Date();
      console.log(vm.date);
    }
  }
})();