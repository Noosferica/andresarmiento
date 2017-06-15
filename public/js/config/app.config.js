function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider, $mdThemingProvider) {
  'ngInject';
  

  $mdThemingProvider.theme('default')
       .primaryPalette('purple', {
        'default': '500',
        'hue-1': '700'
      }) 
       .accentPalette('light-green');

// $httpProvider.interceptors.push(authInterceptor);

/*
  If you don't want hashbang routing, uncomment this line.
  Our tutorial will be using hashbang routing though :)
*/
// $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;