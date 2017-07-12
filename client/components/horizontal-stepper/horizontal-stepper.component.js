import angular from 'angular';

export class HorizontalStepperComponent {
	$onInit() {
		this.goToStep = (selectedStep) => {
		  this.steps.forEach((step) => {
		    step.active = false;
		  });
		  selectedStep.active = true;
		}
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

export default angular.module('directives.horizontalStepper', [])
  .component('horizontalStepper', {
    template: require('./horizontal-stepper.html'),
    controller: HorizontalStepperComponent,
    transclude: true,
    bindings: {
      steps: '='
    }
  })
  .name;
