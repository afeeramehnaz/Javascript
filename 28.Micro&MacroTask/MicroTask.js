/************MicroTask*********************** */
/*In JavaScript, when you execute code, tasks are queued up to be processed by the JavaScript engine. These tasks can be categorized into two main types:

MacroTasks: These are the larger tasks that are typically executed asynchronously. They include things like setTimeout, setInterval, and I/O operations.

MicroTasks: These are smaller tasks that are usually executed synchronously after the currently executing script completes or after a MicroTask has been queued by a MacroTask. Examples of MicroTasks include promises (created using the Promise constructor) and mutation observer callbacks.

The MicroTask queue is a special queue where MicroTasks are placed for execution. When the JavaScript engine completes executing the current script or MacroTask, it checks if there are any MicroTasks in the MicroTask queue. If there are, it processes them one by one until the MicroTask queue is empty before moving on to the next MacroTask.

Here's a simplified analogy to understand it better:

Imagine you have a to-do list with two sections: one for big tasks (MacroTasks) and another for smaller, quick tasks (MicroTasks).

You start with a big task: say, cleaning the entire house (MacroTask).
As you're cleaning, you notice smaller tasks that need immediate attention, like answering a text message or picking up a fallen object (MicroTasks). Instead of waiting until you finish cleaning the whole house, you quickly address these smaller tasks first.
Once you've completed all the smaller tasks, you go back to cleaning the house until it's done.
Only after you've finished cleaning the house (MacroTask) and addressing all the immediate smaller tasks (MicroTasks) do you move on to the next big task on your to-do list.
In JavaScript, the MicroTask queue helps ensure that smaller tasks, like promise callbacks, get processed promptly and don't block the execution of larger tasks. This mechanism is crucial for maintaining responsiveness and efficient handling of asynchronous operations in JavaScript applications.

*/

console.log('Start');

// MacroTask: setTimeout
setTimeout(() => {
  console.log('MacroTask (setTimeout) executed');
}, 0);

// MicroTask: Promise
Promise.resolve().then(() => {
  console.log('MicroTask (Promise) executed');
});

console.log('End');

/*****output 
Start
End
MicroTask (Promise) executed
MacroTask (setTimeout) executed
*/


/*******list of microtask*********/
//Promise callbacks
//Mutation Observer callbacks
//QueueMicrotask()
//Process.nextTick()