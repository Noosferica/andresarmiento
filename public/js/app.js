import angular from 'angular';

// Import our app config files
import appConfig  from './config/app.config';


import 'angular-ui-router';
import 'angular-aria';
import 'angular-resource';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-messages';
import 'angular-material';
import 'angular-material-icons';
import 'angular-moment';
import 'moment';

import './components';
import './home';


const requires = [
  'ui.router',
  'ngResource',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngMaterial',
  'ngMdIcons',
  'ngSanitize',

  'app.components',
  'app.home'
  
  ];
  
  window.app = angular.module('App', requires);

  angular.module('App').config(appConfig)
  



