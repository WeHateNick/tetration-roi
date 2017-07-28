import angular from 'angular';

class FieldsService {
  constructor () {
    this.basicSections = [{
      label: 'Operations and Government',
      fields: [{
        question: 'What is your average number of security zones?',
        label: 'Average number of security zones',
        placeholder: '# of security zones',
        dbEntity: 'b1'
      }]
    }, {
      label: 'Change management',
      fields: [{
        question: 'How many applications will you annually migrate per security zone?',
        label: 'Annual applications to migrate per security zone',
        placeholder: '# of applications',
        dbEntity: 'b2'
      }, {
        question: 'How many annual changes in the network or security environment will you need?',
        label: 'Annual changes in the network or security environment',
        placeholder: '# of required changes',
        dbEntity: 'b3'
      }, {
        question: 'How many applications are impacted during a single change?',
        label: 'Number of applications impacted during a single change',
        placeholder: '# of applications',
        dbEntity: 'b4'
      }],
    }, {
      label: 'Risk and compliance',
      fields: [{
        question: 'What is your annual frequency of external audits?',
        label: 'foo',
        placeholder: '# of external audits',
        dbEntity: 'b5'
      }, {
        question: 'What is your average annual cost of non-compliance?',
        label: 'Average annual cost of non-compliance',
        placeholder: 'Dollars',
        dbEntity: 'b6'
      }, {
        question: 'How many annual security breaches do you experience?',
        label: 'Average annual security breaches',
        placeholder: '# of breaches',
        dbEntity: 'b7'
      }],
    }];
    this.advancedSections = [
      {
        label: 'Operations and governance',
        fields: [
          {
            label: 'Expected annual increase in number of security zones',
            placeholder: '# of security zones',
            dbEntity: 'a1'
          }, {
            label: 'Annual hours per security zone for compliant security access lists management without Tetration',
            placeholder: 'Hours',
            dbEntity: 'a2'
          }, {
            label: 'Annual hours per security zone for security compliance reporting without Tetration',
            placeholder: 'Hours',
            dbEntity: 'a3'
          }, {
            label: 'Reduction in security compliance management with Tetration',
            placeholder: 'Percentage',
            dbEntity: 'a4'
          }, {
            label: 'Annual hours per security zone for SLAs compliance assessments without Tetration',
            placeholder: 'Hours',
            dbEntity: 'a5'
          }, {
            label: 'Annual hours per security zone for SLA compliance reporting without Tetration',
            placeholder: 'Hours',
            dbEntity: 'a6'
          }, {
            label: 'Annual hours per security zone for network change SLA management',
            placeholder: 'Hours',
            dbEntity: 'a7'
          }, {
            label: 'Reduction in SLA management with Tetration',
            placeholder: 'Percentage',
            dbEntity: 'a8'
          }, {
            label: 'Annual hours per security zone for application dependency mapping (ADM) activities without Tetration',
            placeholder: 'Hours',
            dbEntity: 'a9'
          }, {
            label: 'Annual hours per security zone for application dependency mapping (ADM) reporting without Tetration',
            placeholder: 'Hours',
            dbEntity: 'a10'
          }, {
            label: 'Reduction in ADM activities with Tetration',
            placeholder: 'Percentage',
            dbEntity: 'a11'
          }, {
            label: 'Annual software licence costs for ADM tools without Tetration',
            placeholder: 'Dollars',
            dbEntity: 'a12'
          }, {
            label: 'Percentage of ADM license costs that can be avoided with Tetration',
            placeholder: 'Percentage',
            dbEntity: 'a13'
          }
        ],
      }, {
        label: 'Change management',
        fields: [
          {
            label: 'Average migration preparation hours per application',
            placeholder: 'Hours',
            dbEntity: 'a14'
          }, {
            label: 'Percentage of migration time saved with Tetration ADM (application dependency mapping)',
            placeholder: 'Percentage',
            dbEntity: 'a15'
          }, {
            label: 'Annual number of lifecycle stages per security zone application requiring maintenance activities',
            placeholder: '# of stages',
            dbEntity: 'a16'
          }, {
            label: 'Annual cost of ADM lifecycle maintenance activities per 100 applications maintained',
            placeholder: 'Dollars',
            dbEntity: 'a17'
          }, {
            label: 'Annual cost of ADM consultative activities',
            placeholder: 'Dollars',
            dbEntity: 'a18'
          }, {
            label: 'Reduction of applications impacted in a change due to Tetration',
            placeholder: 'Percentage',
            dbEntity: 'a19'
          }, {
            label: 'Percentage of changes requiring roleback due to unknown application dependencies, without Tetration',
            placeholder: 'Hours',
            dbEntity: 'a20'
          }, {
            label: 'Change of critical network disruptions due to unknown application dependencies, without Tetration',
            placeholder: 'Percentage',
            dbEntity: 'a21'
          }, {
            label: 'Average restoration hours per critical network disruption',
            placeholder: 'Hours',
            dbEntity: 'a22'
          }, {
            label: 'Hourly cost of critical network disruption',
            placeholder: 'Dollars',
            dbEntity: 'a23'
          }, {
            label: 'Average hours per rollback/repeat',
            placeholder: 'Hours',
            dbEntity: 'a24'
          }, {
            label: 'Hourly cost of change deployment',
            placeholder: 'Dollars',
            dbEntity: 'a25'
          }
        ]
      }, {
        label: 'Risk and compliance',
        fields: [
          {
            label: 'Average days for external auditor engagement for IT aspects',
            placeholder: 'Days',
            dbEntity: 'a26'
          }, {
            label: 'Cost per day of external auditor',
            placeholder: 'Dollars',
            dbEntity: 'a27'
          }, {
            label: 'Average internal IT hours per day for auditor engagements',
            placeholder: 'Hours',
            dbEntity: 'a28'
          }, {
            label: 'Reduction of total audit duration due to Tetration-driven insights',
            placeholder: 'Percentage',
            dbEntity: 'a29'
          }, {
            label: 'Percentage of non-compliance related to IT',
            placeholder: 'Percentage',
            dbEntity: 'a30'
          }, {
            label: 'Percentage of IT-related non-compliance that can be avoided through Tetration-driven permanent internal auditing',
            placeholder: 'Percentage',
            dbEntity: 'a31'
          }, {
            label: 'Average hours to security breach detection without Tetration',
            placeholder: 'Hours',
            dbEntity: 'a32'
          }, {
            label: 'Average hours to security breach detection with Tetration',
            placeholder: 'Hours',
            dbEntity: 'a33'
          }, {
            label: 'Average cost per security breach',
            placeholder: 'Dollars',
            dbEntity: 'a34'
          }
        ]
      }, {
        label: 'Tetration pricing',
        fields: [
          {
            label: 'Year 1 costs, Tetration hardware and software and 3 years maintenance',
            placeholder: 'Dollars',
            dbEntity: 'a35'
          }, {
            label: 'Year 2 costs, upgrades and addons',
            placeholder: 'Dollars',
            dbEntity: 'a36'
          }, {
            label: 'Year 3 costs, upgrades and addons',
            placeholder: 'Dollars',
            dbEntity: 'a37'
          }, {
            label: 'Selected model',
            placeholder: '',
            readOnly: true,
            dbEntity: 'a38'
          }, {
            label: 'Average hours for implementation',
            placeholder: 'Hours',
            dbEntity: 'a39'
          }, {
            label: 'Average hours for training',
            placeholder: 'Hours',
            dbEntity: 'a40'
          }
        ]
      }
    ];
  }
}

export default angular.module('tetrationRoiApp.FieldsService', [])
  .service('FieldsService', FieldsService).name;
