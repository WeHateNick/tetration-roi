import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  /*@ngInject*/
  constructor(FieldsService) {
    this.basicSections = FieldsService.basicSections;
  }
  $onInit() {
    this.steps = [
      {
        label: '1',
        name: 'Operations',
        complete: false,
        active: true,
        fields: this.basicSections[0].fields
      }, {
        label: '2',
        name: 'Change management',
        complete: false,
        active: false,
        fields: this.basicSections[1].fields
      }, {
        label: '3',
        name: 'Risk and compliance',
        complete: false,
        active: false,
        fields: this.basicSections[2].fields
      }
    ];
  }
}

export default angular.module('tetrationRoiApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
