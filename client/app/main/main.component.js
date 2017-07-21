import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  $onInit() {
    this.steps = [
      {
        label: '1',
        name: 'Operations',
        complete: false,
        active: true,
        description: 'Etiam eget est eu ligula iaculis varius. Donec nec dui facilisis lectus malesuada vehicula eu a neque. Sed vel lacus non erat bibendum accumsan. Suspendisse potenti. Phasellus in turpis sit amet neque feugiat pellentesque. Nulla varius mi ut nisl tincidunt, sit amet faucibus augue volutpat.',
        fields: [{
          question: 'What is your average number of security zones?',
          label: 'foo',
          placeholder: 'Security zones',
          dbEntity: 'ctField1',
          analyticsName: 'Field 1'
        }]
      }, {
        label: '2',
        name: 'Change management',
        complete: false,
        active: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra odio vel nisl maximus pretium. Proin felis lectus, posuere eget neque in, facilisis maximus lectus. Nulla molestie nunc nibh, et commodo turpis lobortis nec.',
        fields: [{
          question: 'How many applications will you annually migrate per security zone?',
          label: 'foo',
          placeholder: '# of applications',
          dbEntity: 'ctField2',
          analyticsName: 'Field 2'
        }, {
          question: 'Annual changes in the network or security environment will you need?',
          label: 'foo',
          placeholder: '# of required changes',
          dbEntity: 'ctField3',
          analyticsName: 'Field 3'
        }, {
          question: 'Number of applications impacted during a single change',
          label: 'foo',
          placeholder: '# of applications',
          dbEntity: 'ctField4',
          analyticsName: 'Field 4'
        }],
      }, {
        label: '3',
        name: 'Risk and compliance',
        complete: false,
        active: false,
        description: 'Nulla eleifend, nunc eget mattis tristique, libero nibh porttitor lectus, a semper nisl nisi vitae sem. Morbi convallis congue lobortis. Vestibulum id tempus velit. Maecenas at semper dolor, non sollicitudin tortor.',
        fields: [{
          question: 'What is your annual frequency of external audits?',
          label: 'foo',
          placeholder: '# of external audits',
          dbEntity: 'ctField5',
          analyticsName: 'Field 5'
        }, {
          question: 'How many annual security breaches do you experience?',
          label: 'foo',
          placeholder: '# of breaches',
          dbEntity: 'ctField6',
          analyticsName: 'Field 6'
        }]
      }
    ];
  }
}

MainController.$inject = ['$state', '$location', '$anchorScroll'];

export default angular.module('tetrationRoiApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
