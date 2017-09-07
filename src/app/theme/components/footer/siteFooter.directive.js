/* eslint-disable */
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('siteFooter', siteFooter);

  /** @ngInject */
  function siteFooter() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/footer/footer.html'
    };
  }

})();