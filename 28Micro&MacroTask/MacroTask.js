/************MacroTask************* */

// MacroTasks are tasks that are executed asynchronously in JavaScript but with lower priority compared to MicroTasks.
// Here are some common examples of tasks that are executed as MacroTasks:

//1.setTimeout() and setInterval(): These functions schedule a task to be executed after a specified delay or at regular intervals, respectively.

setTimeout(() => {
    console.log('This is a MacroTask (setTimeout)');
  }, 1000);
  
  setInterval(() => {
    console.log('This is a MacroTask (setInterval)');
  }, 2000);

//I/O operations: Operations such as reading from or writing to files, making network requests, and interacting with databases are typically executed as MacroTasks.

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
  });
  
//Event listeners: Event listeners registered with addEventListener() are typically executed as MacroTasks when the corresponding event occurs.

document.addEventListener('click', () => {
    console.log('This is a MacroTask (click event)');
  });


//Promise callbacks with setTimeout() or setImmediate(): Although Promise callbacks themselves are MicroTasks, if they contain asynchronous operations like setTimeout() or setImmediate(), those operations are executed as MacroTasks.

Promise.resolve().then(() => {
    setTimeout(() => {
      console.log('This is a MacroTask inside a MicroTask');
    }, 1000);
  });
  