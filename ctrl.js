angular.module('app').controller('myCtrl', function($scope, service) {
  service.getPeople().then(function(response) {
    $scope.people = response.reverse();
  });
  $scope.addNewPerson = function(person) {
    service.addNewPerson(person).then(function(response) {
      $scope.people = response.reverse();
    });
  };
});
