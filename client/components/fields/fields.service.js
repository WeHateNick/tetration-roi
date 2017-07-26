import angular from 'angular';

class FieldsService {
  constructor () {
    this.main = {
      operations: [{
        question: 'What is your average number of security zones?',
        label: 'foo',
        placeholder: '# of security zones',
        dbEntity: 'ctField1',
        analyticsName: 'Field 1'
      }],
      changeManagement: [{
        question: 'How many applications will you annually migrate per security zone?',
        label: 'foo',
        placeholder: '# of applications',
        dbEntity: 'ctField2',
        analyticsName: 'Field 2'
      }, {
        question: 'How many annual changes in the network or security environment will you need?',
        label: 'Annual changes in the network or security environment',
        placeholder: '# of required changes',
        dbEntity: 'ctField3',
        analyticsName: 'Field 3'
      }, {
        question: 'How many applications are impacted during a single change?',
        label: 'Number of applications impacted during a single change',
        placeholder: '# of applications',
        dbEntity: 'ctField4',
        analyticsName: 'Field 4'
      }],
      riskAndCompliance: [{
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
    };
    this.advanced = {
      operations: [{
        label: 'Expected annual increase in number of security zones',
        placeholder: '# of security zones',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }, {
        label: 'Annual hours per security zone for compliant security access lists management without Tetration',
        placeholder: '# of hours',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }, {
        label: 'Annual hours per security zone for security compliance reporting without Tetration',
        placeholder: '# of hours',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }, {
        label: 'Percent reduction in security compliance management with Tetration',
        placeholder: 'Percentage reduction',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }, {
        label: 'Annual hours per security zone for SLAs compliance assessments without Tetration',
        placeholder: '# of hours',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }, {
        label: 'Annual hours per security zone for SLA compliance reporting without Tetration',
        placeholder: '# of hours',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }, {
        label: 'Annual hours per security zone for network change SLA management',
        placeholder: '# of hours',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }, {
        label: 'Percent reduction in SLA management with Tetration',
        placeholder: 'Percent reduction',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }, {
        label: 'Annual hours per security zone for application dependency mapping (ADM) activities without Tetration',
        placeholder: '# of hours',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }, {
        label: 'Annual hours per security zone for application dependency mapping (ADM) reporting without Tetration',
        placeholder: '# of hours',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }, {
        label: 'Percent reduction in ADM activities with Tetration',
        placeholder: 'Percent reduction',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }, {
        label: 'Annual software licence costs for ADM tools without Tetration',
        placeholder: 'Dollars',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }, {
        label: 'Percent of ADM license costs that can be avoided with Tetration',
        placeholder: 'Percent',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }
      ],
      changeManagement: [{
        label: 'foo',
        placeholder: '# of applications',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }, {
        label: 'Annual changes in the network or security environment',
        placeholder: '# of required changes',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }, {
        label: 'Number of applications impacted during a single change',
        placeholder: '# of applications',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }],
      riskAndCompliance: [{
        label: 'foo',
        placeholder: '# of external audits',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }, {
        label: 'foo',
        placeholder: '# of breaches',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }],
      pricing: [{
        label: 'foo',
        placeholder: '# of external audits',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }, {
        label: 'foo',
        placeholder: '# of breaches',
        dbEntity: 'ctFieldx',
        analyticsName: 'Field X'
      }]
    };
  }
}

export default angular.module('tetrationRoiApp.FieldsService', [])
  .service('FieldsService', FieldsService).name;
