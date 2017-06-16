class HomeCtrl {
  constructor($scope, $http, $stateParams, Home, $location, $document) {
    'ngInject';

    $scope.toTheTop = function() {
      $document.scrollTopAnimated(0, 5000).then(function() {
        console && console.log('You just scrolled to the top!');
      });
    }
    var section3 = angular.element(document.getElementById('section-3'));
    $scope.toSection3 = function() {
      $document.scrollToElementAnimated(section3);
    }
  }


}

export default HomeCtrl;