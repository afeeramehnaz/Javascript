function greet(name = "there") {
  console.log(`Hello, ${name}!`);
}

greet();           // Outputs: Hello, there!
greet("Alice");    // Outputs: Hello, Alice!


function greet(name) {
    if (arguments.length === 0) {
      console.log("Hello, there!");
    } else {
      console.log(`Hello, ${name}!`);
    }
  }
  
  greet();           // Outputs: Hello, there!
  greet("Alice");    // Outputs: Hello, Alice!
  