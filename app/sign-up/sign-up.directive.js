{
  angular.module('meganote.signUp')
    .directive('signUp', [() => {

      'UsersService',
      (UsersService) => {

        class SignUpController{
          constructor (UsersService){
            UsersService = UsersService;
            this.user = {};
          }
          submit(){
            UsersService.create(this.user);
          }
        }

        return {
          scope: {},
          controller: SignUpController,
          controllerAs: 'vm',
          bindToController: true,
          templateUrl:'/sign-up/sign-up.html',
        };

        //////////////////////////////////////


      }}]);
}
