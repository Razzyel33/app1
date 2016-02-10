'use strict';

angular.module('app1App.auth', [
  'app1App.constants',
  'app1App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
