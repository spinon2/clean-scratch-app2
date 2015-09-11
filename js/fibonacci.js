//  This is counter class to run unitest "Karma"

angular.module('ExampleApp', [])
.service('FibonacciService', [function() {

  // iterative approach
  this.fibonacci = function(num) {
    var prev1 = 1,
        prev2 = 0,
        current = 0;
    for (var n = 2; n <= num; n++) {
      current = prev1 + prev2;
      prev2 = prev1;
      prev1 = current;
    }
    return current;
  };

}]);