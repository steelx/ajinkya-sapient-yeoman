'use strict';

angular.module('ajinkyaBoradeSapienttestApp')
  .controller('ContactusCtrl', function ($scope, ContactusData) {
    $scope.slides = ContactusData.slides;

    $scope.formData = {};
    $scope.saveForm = function (fields, contentForm) {
    	if(contentForm.$valid){
    		//saved
    		$scope.formData = angular.copy(fields);
    		console.log($scope.formData, contentForm);
    		$('.alert-success').removeClass('hide');
    	}
    };

    //bootstrap
  	$('#myCarousel').carousel({interval: 2000});

  	//checkboxes
  	$('#checkbox-all').on('click', function(event) {   
	    if(this.checked) {
	        // Iterate each checkbox
	        $(':checkbox').each(function() {
	            this.checked = true;
	            toggleLabelClass.call(this);              
	        });
	    } else {
	    	$(':checkbox').each(function() {
	            this.checked = false;
	            toggleLabelClass.call(this);                  
	        });
	    }
	});

	$(".checkboxes :checkbox").on('change', function() {
	  toggleLabelClass.call(this);
	});
	function toggleLabelClass() {
		$(this).parent("label").toggleClass("checked", this.checked); 
	}
  });