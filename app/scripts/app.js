'use strict';

angular.module('ajinkyaBoradeSapienttestApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/contactus', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactusCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html'
      })
      .otherwise({
        redirectTo: '/contactus'
      });

      $locationProvider.html5Mode(true);
  });

//nav
$('.nav li a', '.header').on('click', function (e) {
  $('.nav li.active').removeClass('active');
  $(this).parent('li').addClass('active');
});