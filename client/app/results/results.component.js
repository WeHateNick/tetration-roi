import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './results.routes';
import c3 from 'c3';

export class ResultsController {
  constructor($timeout, $mdDialog) {
    this.$timeout = $timeout;
    this.$mdDialog = $mdDialog;
  }
  $onInit() {
    this.BasicInputs = [
      {
        name: 'Governance',
        score: {
          dbEntity: 'governanceScore',
          analyticsName: 'Governance Score',
          value: 0
        },
        average: {
          dbEntity: 'governanceAvg',
          analyticsName: 'Governance Average Score',
          value: 0
        }
      }, {
        name: 'Construction',
        score: {
          dbEntity: 'constructionScore',
          analyticsName: 'Construction Score',
          value: 0
        },
        average: {
          dbEntity: 'constructionAvg',
          analyticsName: 'Construction Average Score',
          value: 0
        }
      }, {
        name: 'Verification',
        score: {
          dbEntity: 'verificationScore',
          analyticsName: 'Verification Score',
          value: 0
        },
        average: {
          dbEntity: 'verificationAvg',
          analyticsName: 'Verification Average Score',
          value: 0
        }
      }, {
        name: 'Deployment',
        score: {
          dbEntity: 'deploymentScore',
          analyticsName: 'Deployment Score',
          value: 0
        },
        average: {
          dbEntity: 'deploymentAvg',
          analyticsName: 'Deployment Average Score',
          value: 0
        }
      }
    ];
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
    this.showPrompt = (ev) => {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = this.$mdDialog.prompt()
        .title('Average number of security zones')
        .textContent('Per year')
        .placeholder('400')
        .ariaLabel('Average number of security zones')
        .initialValue('400')
        .targetEvent(ev)
        .ok('Done')
        .cancel('Cancel');
      this.$mdDialog.show(confirm).then((result) => {
        this.status = 'You decided to name your dog ' + result + '.';
      }, () => {
        this.status = 'You didn\'t name your dog.';
      });
    };


    function advancedFieldsCtrl () {

    }
    this.showAdvancedDialog = (ev) => {
      this.$mdDialog.show({
        controller: advancedFieldsCtrl,
        templateUrl: '/components/advanced-dialog/advanced-dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: false // Only for -xs, -sm breakpoints.
      })
      .then(function (answer) {
        // this.status = 'You said the information was "' + answer + '".';
      }, function() {
        // this.status = 'You cancelled the dialog.';
      });
    };
  }
}
ResultsController.$inject = ['$timeout', '$mdDialog'];

export default angular.module('hpeSecurityApp.results', [uiRouter])
  .config(routing)
  .component('results', {
    template: require('./results.html'),
    controller: ResultsController,
    controllerAs: '$ctrl'
  })
  .name;
