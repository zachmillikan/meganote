{
  angular.module('meganote', [
    'ui.router',
    'ngFlash',
    'textAngular',
    'ngResource',
    'meganote.notes',
    'meganote.notesForm',
    'meganote.signUp',
    'meganote.signIn',
    'meganote.users',
  ])
    .config(config)
    .run(run);

  config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/sign-up');
  }

  run.$inject = ['$rootScope', '$state'];
  function run($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', () => {
      $rootScope.$state = $state;
    });

    $rootScope.$on('$stateChangeError', () => {
      $state.go('sign-in');
    });
  }


}
