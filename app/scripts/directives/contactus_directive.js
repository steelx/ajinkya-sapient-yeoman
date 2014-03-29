angular.module('ajinkyaBoradeSapienttestApp')
	.directive('pwCheck', [function () {
	return {
		require: 'ngModel',
		link: function (scope, elem, attrs, ctrl) {
			var firstPassword = attrs.pwCheck;
			elem.add('input[name="' + firstPassword + '"]').on('keyup', function () {
				scope.$apply(function () {
					var v = elem.val()===$('input[name="' + firstPassword + '"]').val();
					ctrl.$setValidity('pwmatch', v);
				});
			});
		}
	}
}]);