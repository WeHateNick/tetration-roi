import angular from 'angular';

class FieldsService {
  constructor () {
    this.main = {
      operations: [{
        question: 'What is your average number of security zones?',
        label: 'foo',
        placeholder: 'Security zones',
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
  }
}

export default angular.module('tetrationRoiApp.FieldsService', [])
  .service('FieldsService', FieldsService).name;
