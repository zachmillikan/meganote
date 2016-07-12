{
  angular.module('meganote.signUp')
    .directive('signUp', [

      '$state',
      'UsersService',
      'Flash',
      ($state, UsersService, Flash ) => {

        class SignUpController{
          constructor (){
            this.user = {};
          }
          submit(){
            UsersService.create(this.user)
              .then(
                () => $state.go('notes.form', { noteId: undefined })
              )
              .catch(
                () => Flash.create('danger', 'Unable to sign user up, check credentials.')
              );
          }
        }

        return {
          scope: {},
          controller: SignUpController,
          controllerAs: 'vm',
          bindToController: true,
          templateUrl:'/sign-up/sign-up.html',
        };
      }
    ]);
}
