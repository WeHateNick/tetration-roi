'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class HeaderComponent {}

export default angular.module('directives.ctHeader', [])
  .component('ctHeader', {
    template: require('./ct-header.html'),
    controller: HeaderComponent,
    transclude: true
  })
  .name;
