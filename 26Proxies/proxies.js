/*******************Proxies************* */
/**
 * In JavaScript, a Proxy is an object that wraps another object (the target) and intercepts operations performed on the target object, 
 * allowing custom behavior to be implemented for these operations. Proxies provide a powerful mechanism for implementing various features such as trapping property access,
 *  property assignment, function invocation, and more.


 */
/****************Basic Syntax******* */
 let proxies = new Proxy(target, handler);


/**
1.target: The object that the proxy wraps.
2.handler: An object containing trap functions (methods) that intercept operations on the target object.


Trap Functions (Handler Methods):
get(target, property, receiver): Intercepts property access on the target object.

set(target, property, value, receiver): Intercepts property assignment on the target object.

apply(target, thisArg, argumentsList): Intercepts function invocation on the target object.

construct(target, argumentsList, newTarget): Intercepts object instantiation with new.

and more: There are other trap functions available for various operations like property deletion, property enumeration, etc.
 */

let target = {
    message: "Hello"
};

let handler = {
    get: function(target, property, receiver) {
        return property in target ? target[property] : "Property does not exist";
    },
    set: function(target, property, value, receiver) {
        if (property === "message") {
            console.log(`Setting message to: ${value}`);
            target[property] = value;
        } else {
            console.log("Cannot set property other than 'message'");
        }
    }
};

let proxy = new Proxy(target, handler);

console.log(proxy.message); // Output: Hello
console.log(proxy.unknown); // Output: Property does not exist

proxy.message = "Hi"; // Output: Setting message to: Hi
console.log(proxy.message); // Output: Hi

proxy.extra = "Extra Property"; // Output: Cannot set property other than 'message'
console.log(proxy.extra); // Output: Property does not exist


/*
In this example, we create a Proxy object around the target object. The handler object defines get and set traps to intercept property access and assignment, respectively. When accessing or setting properties on the proxy, the corresponding trap functions defined in the handler are invoked, allowing custom behavior to be implemented.

Use Cases:
Validation: Proxies can be used to enforce validation rules when setting properties.

Logging and Debugging: Proxies can log property access, assignments, or function invocations for debugging purposes.

Virtualization: Proxies can intercept property access and dynamically generate or compute property values.

Security: Proxies can restrict access to certain properties or methods on an object for security purposes.

Intercepting Method Calls: Proxies can intercept method calls on objects and perform additional actions before or after invoking the method.

*/