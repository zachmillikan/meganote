{
  angular.module('meganote.users')
    .service('UsersService', [
      '$http',
      'API_BASE',
      ($http, API_BASE, AuthToken, CurrentUser) => {

        const apiURI = '${API_BASE}users/';

        class UsersService {
          create (user) {
            return $http.post(apiURI, {
              user,
            })
              .then(
                res => {
                  AuthToken.set(res.data.authToken);
                  CurrentUser.set(res.data.user);
                }
              );
          }
        }
        return new UsersService();
      }
    ]);
}
