// Define the Person constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Define the greet function
  function greet(place) {
    console.log(`Hello I'm ${this.name} and my age is ${this.age} and I'm in ${place}`);
  }
  
  // Polyfill for Function.prototype.call()
  if (!Function.prototype.call) {
    Function.prototype.call = function(thisArg) {
      if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.call called on non-function');
      }
  
      // Get the additional arguments passed to call (excluding the first one)
      var args = [];
      for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
  
      // If thisArg is not provided, default to global object
      thisArg = thisArg || window;
  
      // Create a unique property name on the context (thisArg) object
      var uniqueProperty = '__unique__' + Math.floor(Math.random() * 1000000);
      thisArg[uniqueProperty] = this;
  
      // Call the function with the provided context and arguments
      var result = thisArg[uniqueProperty].apply(thisArg, args);
  
      // Clean up by removing the temporary property from the context object
      delete thisArg[uniqueProperty];
  
      // Return the result of the function call
      return result;
    };
  }
  
  // Create an instance of Person
  const details = new Person('afeera', 26);
  
  // Call the greet function with details object as context and 'dhaka' as argument
  greet.call(details, 'dhaka');
  