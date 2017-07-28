import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  /*@ngInject*/
  constructor ($rootScope, FieldsService) {
    this.fieldService = FieldsService;
    this.$rootScope = $rootScope;
  }
  $onInit () {
    this.steps = [
      {
        label: '1',
        name: 'Operations',
        complete: false,
        active: true,
        fields: this.fieldService.basicSections[0].fields
      }, {
        label: '2',
        name: 'Change management',
        complete: false,
        active: false,
        fields: this.fieldService.basicSections[1].fields
      }, {
        label: '3',
        name: 'Risk and compliance',
        complete: false,
        active: false,
        fields: this.fieldService.basicSections[2].fields
      }
    ];
    if (this.$rootScope.mainstayConfig) {
      this.$rootScope.mainstayConfig.init();      
    }
  }
  updateShadow(field) {
    debugger;
    let el = document.getElementById(field.dbEntity),
        val = parseInt(field.value);
    angular.element(el).val(val).triggerHandler('click');
  }
}

export default angular.module('tetrationRoiApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
