'use strict';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
// import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';
import {routeConfig} from './app.config';

import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import header from '../components/header/ct-header.component';
import footer from '../components/footer/footer.component';

import './app.scss';

angular.module('tetrationRoiApp', [ngCookies, ngResource, ngSanitize, 
	uiRouter, ngAnimate, ngMaterial, constants, util,
	main, header, footer
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['tetrationRoiApp'], {
      strictDi: true
    });
  });
