import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  /*@ngInject*/
  constructor(FieldsService) {
    this.fields = FieldsService;
  }
  $onInit() {
    this.steps = [
      {
        label: '1',
        name: 'Operations',
        complete: false,
        active: true,
        description: 'Etiam eget est eu ligula iaculis varius. Donec nec dui facilisis lectus malesuada vehicula eu a neque. Sed vel lacus non erat bibendum accumsan. Suspendisse potenti. Phasellus in turpis sit amet neque feugiat pellentesque. Nulla varius mi ut nisl tincidunt, sit amet faucibus augue volutpat.',
        fields: this.fields.main.operations
      }, {
        label: '2',
        name: 'Change management',
        complete: false,
        active: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra odio vel nisl maximus pretium. Proin felis lectus, posuere eget neque in, facilisis maximus lectus. Nulla molestie nunc nibh, et commodo turpis lobortis nec.',
        fields: this.fields.main.changeManagement,
      }, {
        label: '3',
        name: 'Risk and compliance',
        complete: false,
        active: false,
        description: 'Nulla eleifend, nunc eget mattis tristique, libero nibh porttitor lectus, a semper nisl nisi vitae sem. Morbi convallis congue lobortis. Vestibulum id tempus velit. Maecenas at semper dolor, non sollicitudin tortor.',
        fields: this.fields.main.riskAndCompliance
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
