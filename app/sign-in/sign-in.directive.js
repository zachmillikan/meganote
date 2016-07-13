{
  angular.module('meganote.signIn')
  .directive('signIn' [

    '$state',
    'UsersService',
    'Flash',
    ($state, UsersService, Flash) => {

      class SignInController {
        submit() {
          var vm = this;
          UsersService.login(vm.user)
            .then(
              () => $state.go('notes.form', {noteId: undefined })
            )
            .catch(
              () => Flash.create('danger', 'Unable to log user in, check credentials.')
            );
        }
      }

      return {
        scope: {},
        controller: SignInController,
        controllerAs: 'vm',
        bindToController: true,
        template: `

        <div class="container">
          <div class="row">
            <div class="col-xs-6 col-xs-offset-4">
              <h3>Welcome Back!</h3>
              <form id="new_user" ng-submit="vm.submit()">
                <p>
                  <label for="username">Username</label><br>
                  <input
                    type="text"
                    name="username"
                    ng-model="vm.user.username"
                    required>
                </p>
                <p>
                  <label for="password">Password</label><br>
                  <input
                    type="password"
                    name="password"
                    ng-model="vm.user.password"
                    required>
                </p>
                <input type="submit" name="commit" value="Sign In" class="btn btn-default">
                <span class="login">
                  Don't have an account?
                  <a ui-sref="sign-in">Sign in!</a>
                </span>
              </form>
              <flash-message
              duration="3000"
              show-close="false"></flash-message>
            </div>
          </div>
        </div>

        `,
      };
    }
  ]);
}
