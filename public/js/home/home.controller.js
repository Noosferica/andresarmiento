class HomeCtrl {
  constructor($scope, $http, $stateParams, Home, $location) {
    'ngInject';

    $scope.authentication = Home;
    
  }

}

export default HomeCtrl;