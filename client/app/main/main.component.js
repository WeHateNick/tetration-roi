import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  constructor($state, $location, $anchorScroll) {
    this.$state = $state;
    this.$location = $location;
    this.$anchorScroll = $anchorScroll;
  }
  $onInit() {
    var scrollToTop = () => {
      this.$location.hash('stepper');
      this.$anchorScroll();
    };
    this.steps = [
      {
        label: '1',
        name: 'Operations',
        complete: false,
        active: true,
        description: 'Etiam eget est eu ligula iaculis varius. Donec nec dui facilisis lectus malesuada vehicula eu a neque. Sed vel lacus non erat bibendum accumsan. Suspendisse potenti. Phasellus in turpis sit amet neque feugiat pellentesque. Nulla varius mi ut nisl tincidunt, sit amet faucibus augue volutpat.',
        questions: [{
          number: 1,
          content: 'We have completed an inventory of our software portfolio (including in-house development, COTS, third-party development, etc.)',
          dbEntity: 'hpeQuestion1',
          analyticsName: 'Question 1'
        }, {
          number: 2,
          content: 'Applications in our portoflio have been classified according to data type',
          dbEntity: 'hpeQuestion2',
          analyticsName: 'Question 2'
        }]
      }, {
        label: '2',
        name: 'Change management',
        complete: false,
        active: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra odio vel nisl maximus pretium. Proin felis lectus, posuere eget neque in, facilisis maximus lectus. Nulla molestie nunc nibh, et commodo turpis lobortis nec.',
        questions: [{
          number: 9,
          content: 'Secure frameworks and design features are considered during the design process',
          dbEntity: 'hpeQuestion9',
          analyticsName: 'Question 9'
        }, {
          number: 10,
          content: 'We have a documented process track use of open source components and verify their security',
          dbEntity: 'hpeQuestion10',
          analyticsName: 'Question 10'
        }],
      }, {
        label: '3',
        name: 'Risk and compliance',
        complete: false,
        active: false,
        description: 'Nulla eleifend, nunc eget mattis tristique, libero nibh porttitor lectus, a semper nisl nisi vitae sem. Morbi convallis congue lobortis. Vestibulum id tempus velit. Maecenas at semper dolor, non sollicitudin tortor.',
        questions: [{
          number: 13,
          content: 'We conduct regular secure code reviews',
          dbEntity: 'hpeQuestion13',
          analyticsName: 'Question 13'
        }, {
          number: 14,
          content: 'We conduct secure design reviews for new projects',
          dbEntity: 'hpeQuestion14',
          analyticsName: 'Question 14'
        }]
      }
    ];
    this.nextStep = () => {
      var nextStep = false;
      this.steps.forEach((step, index) => {
        if (step.active && !nextStep) {
          if (index === this.steps.length -1) {
            this.$state.go('results');
            return;
          }
          step.active = false;
          step.complete = true;
          nextStep = index + 1;
          this.steps[nextStep].active = true;
        }
      })
      scrollToTop();
    };
    this.previousStep = () => {
      var previousStep = false;
      this.steps.forEach((step, index) => {
        if (step.active && !previousStep) {
          step.active = false;
          previousStep = index - 1;
          this.steps[previousStep].active = true;
          this.steps[previousStep].complete = false;
        }
      })
      scrollToTop();
    };
    this.isSectionIncomplete = (questions) => {
      var isIncomplete = false;
      questions.forEach((question) => {
        if (!question.value) {
          isIncomplete = true;
        }
      });
      return isIncomplete;
    };
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
