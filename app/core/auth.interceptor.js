{
  angular.module('meganote')
    .factory('AuthInterceptor', AuthInterceptor)
    .config(intercepterConfig);

  AuthInterceptor.$inject = ['AuthToken', 'API_BASE'];
  function AuthInterceptor(AuthToken, API_BASE) {
    return {
      request(req) {
        const token = AuthToken.get();
        if(token && req.url.includes(API_BASE)){
          req.headers.Autherization = token;
        }
        return req;
      }
    };
  }

  intercepterConfig.$inject = ['$httpProvider'];
  function intercepterConfig($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  }
}
