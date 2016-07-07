{
  angular.module('meganote.users')
    .service('UsersService', [
      '$hhtp',
      'API_BASE',
      ($http, API_BASE) => {

        class UsersService {
          create (users) {
            $http.get(API_BASE)
              .then(
                res => {
                  console.log(res.data);
                }
              );
          }
        }
        return new UsersService();
      }
    ]);
}
