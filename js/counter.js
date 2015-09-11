//  This is counter class to run unitest "Karma"

angular.module('CounterApp',[])
.service('CounterService',[function(){

	// All functions
	this.add = function(num1, num2) {
       	return num1 + num2;
    };


}]);


// var counter = (function () {
 	
//  	var add = function(num1, num2) {
//         return num1 + num2;
//     };

// }());