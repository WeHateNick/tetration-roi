import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './results.routes';
import c3 from 'c3';
import advancedFieldsTpl from '../../components/advanced-dialog/advanced-dialog.html';

export class ResultsController {
  /*@ngInject*/
  constructor($timeout, $mdDialog, $mdSidenav, FieldsService) {
    this.$timeout = $timeout;
    this.$mdDialog = $mdDialog;
    this.$mdSidenav = $mdSidenav;
    this.fields = FieldsService;
  }
  $onInit() {
    this.basicFields = this.fields.basicSections.reduce((allFields, section) => {
      return allFields.concat(section.fields);
    }, []);
    this.advanced = {
      sections: this.fields.advancedSections,
      expand: (selectedSection) => {
        this.advanced.sections.forEach((section) => {
          if (section.label === selectedSection.label) {
            selectedSection.expanded = !selectedSection.expanded;            
          } else {
            section.expanded = false;            
          }
        });
      }
    };
    this.$timeout(() => {
      var chart = c3.generate({
        bindto: '#valueSummary',
        data: {
          columns: [
            ['Reduce costs', 15.4],
            ['Reduce risk', 83.4],
            ['Growth revenues', 1.2]
          ],
          type: 'pie'
        }
      });
      var chart = c3.generate({
        bindto: '#valueDistribution',
        data: {
          columns: [
            ['Compliant security management productivity', 198000],
            ['SLA management savings', 130000],
            ['Application dependency mapping efficiencies', 903000],
            ['Migration and lifecycle management savings', 900000],
            ['ADM-related rollbacks avoidance', 36000],
            ['External audit efficiencies', 474000],
            ['Compliance penalty prevension', 135000],
            ['ADM-related critical disruptions avoidance', 6687000],
            ['Security breach prevention', 132000],
          ],
          type: 'pie'
        }
      });
    }, 1000);
    this.advancedFieldsDialogCtrl = (scope, $mdDialog) => {
      scope.advanced = this.advanced;
      scope.cancel = () => {
        $mdDialog.cancel();
      };
      scope.submit = (submission) => {
        $mdDialog.hide(submission);
      };
    }
    this.advancedFieldsDialogCtrl.$inject = ['scope', '$mdDialog'];
  }
  hasValues(section) {
    var isPopulated = section.fields.find((field) => {return !!field.value});
    return isPopulated;
  }
  openSidenav() {
    this.$mdSidenav('sidenav').open();
  }
  closeSidenav () {
    this.$mdSidenav('sidenav').close();
  }
  showPrompt(ev, field) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = this.$mdDialog.prompt()
      .title(field.label)
      .placeholder(field.placeholder)
      .ariaLabel(field.label)
      .initialValue(field.value)
      .targetEvent(ev)
      .ok('Done')
      .cancel('Cancel');
    this.$mdDialog.show(confirm).then((result) => {
      field.value = parseInt(result);
    });
  };
  showAdvancedDialog(ev) {
    this.$mdDialog.show({
      controller: this.advancedFieldsDialogCtrl,
      template: require('../../components/advanced-dialog/advanced-dialog.html'),
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    });
  };
}

export default angular.module('hpeSecurityApp.results', [uiRouter])
  .config(routing)
  .component('results', {
    template: require('./results.html'),
    controller: ResultsController
  })
  .name;
