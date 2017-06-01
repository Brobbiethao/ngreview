angular.module('app').service('service', function($http) {
  this.test = 'Service Test';
  this.getPeople = function() {
    return $http.get('/api').then(function(res) {
      return res.data;
    });
  };
  this.addNewPerson = function(person) {
    return $http.post('/api', person).then(function(response) {
      return response.data;
    });
  };
});
