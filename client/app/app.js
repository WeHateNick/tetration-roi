'use strict';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import {routeConfig, mainstayConfig} from './app.config';

import main from './main/main.component';
import results from './results/results.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import header from '../components/header/ct-header.component';
import footer from '../components/footer/footer.component';
import horizontalStepper from '../components/horizontal-stepper/horizontal-stepper.component';
import horizontalStep from '../components/horizontal-stepper/horizontal-step/horizontal-step.component';
import fields from '../components/fields/fields.service.js';

import './app.scss';

angular.module('tetrationRoiApp', [ngCookies, ngResource, ngSanitize, 
	uiRouter, ngAnimate, ngMaterial, constants, util,
	main, results, header, footer, horizontalStepper, horizontalStep, fields
])
  .config(routeConfig);
  // .run(mainstayConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['tetrationRoiApp'], {
      strictDi: true
    });
  });
