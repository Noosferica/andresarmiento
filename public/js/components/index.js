import angular from 'angular';

// Create the module where our functionality can attach to
let componentsModule = angular.module('app.components', []);


// Components toolbar
import ToolbarApp from './toolbar.component';
componentsModule.component('toolbarApp', ToolbarApp);



export default componentsModule;
