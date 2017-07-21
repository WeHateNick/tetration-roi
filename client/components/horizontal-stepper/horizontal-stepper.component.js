import angular from 'angular';

export class HorizontalStepperComponent {
	// @ngInject
	constructor($state, $location, $anchorScroll) {
		this.$state = $state;
		this.$location = $location;
		this.$anchorScroll = $anchorScroll;
	}
	scrollToTop() {
	  this.$location.hash('stepper');
	  this.$anchorScroll();
	};
	goToStep(selectedStep) {
	  this.steps.forEach((step) => {
	    step.active = false;
	  });
	  selectedStep.active = true;
	}
	nextStep() {
	  let nextStep = false;
	  this.steps.forEach((step, index) => {
	    if (step.active && !nextStep) {
	      // If it's the last step
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
	  this.scrollToTop();
	};
	previousStep() {
	  let previousStep = false;
	  this.steps.forEach((step, index) => {
	    if (step.active && !previousStep) {
	      step.active = false;
	      previousStep = index - 1;
	      this.steps[previousStep].active = true;
	      this.steps[previousStep].complete = false;
	    }
	  })
	  this.scrollToTop();
	};
	isFirstStep() {
	  return this.steps[0].active;
	};
	isSectionIncomplete(questions) {
	  var isIncomplete = false;
	  questions.forEach((question) => {
	    if (!question.value) {
	      isIncomplete = true;
	    }
	  });
	  return isIncomplete;
	};
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
