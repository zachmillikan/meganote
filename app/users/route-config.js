{
  angular.module('meganote.users')
    .config(usersConfig);

  usersConfig.$inject = ['$stateProvider'];
  function usersConfig($stateProvider) {
    $stateProvider

      .state('signup', {
        url: '/signup',
        template: '<sign-up></sign-up>',
      });
  }
}
