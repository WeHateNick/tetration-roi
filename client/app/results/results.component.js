import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './results.routes';
import c3 from 'c3';
import advancedFieldsTpl from '../../components/advanced-dialog/advanced-dialog.html';

export class ResultsController {
  /*@ngInject*/
  constructor ($rootScope, $timeout, $mdDialog, $mdSidenav, FieldsService) {
    this.$rootScope = $rootScope;
    this.$timeout = $timeout;
    this.$mdDialog = $mdDialog;
    this.$mdSidenav = $mdSidenav;
    this.fieldService = FieldsService;
  }
  $onInit () {
    this.basicFields = this.fieldService.basicSections.reduce((allFields, section) => {
      return allFields.concat(section.fields);
    }, []);
    this.advanced = {
      sections: this.fieldService.advancedSections,
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
            ['Reduce costs', ],
            ['Reduce risk', 83.6]
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
      scope.updateShadow = (field) => {
        this.updateShadow(field);
      };
      scope.cancel = () => {
        $mdDialog.cancel();
      };
      scope.submit = (field) => {
        $mdDialog.hide();
      };
    }
    this.advancedFieldsDialogCtrl.$inject = ['scope', '$mdDialog'];

    if (this.$rootScope.mainstayConfig) {
      this.$rootScope.mainstayConfig.init();      
    }
  }
  updateShadow(field) {
    let el = document.getElementById(field.dbEntity);
    angular.element(el).val(field.value).triggerHandler('click');
  }
  hasValues (section) {
    var isPopulated = section.fields.find( (field) => !!field.value );
    return isPopulated;
  }
  openSidenav () {
    this.$mdSidenav('sidenav').open();
  }
  closeSidenav () {
    this.$mdSidenav('sidenav').close();
  }
  showPrompt (ev, field) {
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
      this.updateShadow(field);
    });
  };
  showAdvancedDialog (ev) {
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
