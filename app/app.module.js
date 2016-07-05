(function() {
  var app = angular.module('meganote', [
    'ui.router',
    'ngFlash',
    'textAngular',
    'meganote.notes'
  ])
    .config(config);

  config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes/');
  }
})();
