/* global describe, it, expect */

// --------------------------------------------------
//  The below block is just for simple test
// -------------------------------------------------

// describe('test',function(){
//     it('should work',function(){
//       expect(true).toBe(true);
//     });
// });

// describe('grunt-karma >> ', function () {
//   describe('one', function () {
//     it('should be awesome', function () {
//       var result = "foo";      
//       expect(result).toBe("foo");
//     });
//   });

//   describe('two', function () {
//     it('should be equally awesome', function () {
//       var result = "nice";   
//       expect(result).toBe("nice");
//     });
//   });
// });


describe('ExampleApp.FibonacciService', function() {

  var FibonacciService;

  beforeEach(module('ExampleApp'));
  beforeEach(inject(function($injector) {
    FibonacciService = $injector.get('FibonacciService');
  }));

  it('Should output correct Fibanacci numbers', function() {
    // expect(FibonacciService.fibonacci(0)).toBe(0);
    expect(FibonacciService.fibonacci(1)).toBe(0);
    expect(FibonacciService.fibonacci(10)).toBe(55);
  });

});

describe("Counter test >> ", function () {

    var CounterService;

    beforeEach(module('CounterApp'));
    beforeEach(inject(function($injector) {
      CounterService = $injector.get('CounterService');
    }));

    it('Add gives the correct result', function() {
      // expect(CounterService.fibonacci(0)).toBe(0);
      expect(CounterService.add(1,2)).toBe(3);
      expect(CounterService.add(10,20)).toBe(30);
    });

    
});
