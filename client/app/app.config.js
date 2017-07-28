'use strict';

export function routeConfig($urlRouterProvider, $locationProvider, $mdThemingProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);

  var ctAccentMap = $mdThemingProvider.extendPalette('blue', {
    A200: '049FD9',
    A700: '3EB6E3',
    contrastDefaultColor: 'light'
  });

  $mdThemingProvider.definePalette('ctAccentColor', ctAccentMap);

  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('ctAccentColor');
}

export function mainstayConfig ($rootScope) {
  'ngInject';

  $rootScope.mainstayConfig = microTool.util;
}
