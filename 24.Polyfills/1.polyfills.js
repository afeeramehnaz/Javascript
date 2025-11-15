/*****************Polyfills***************************** */

/**
Polyfills in JavaScript are code snippets or libraries that provide modern functionality to older web browsers that lack support for certain features, methods, or APIs. 
They "fill in" the gaps in browser compatibility by implementing these missing features in JavaScript, allowing developers to write code using the latest standards without worrying about whether all users' browsers support those standards.

Here's how polyfills typically work:

Feature Detection: Polyfills often start by detecting whether a certain feature is supported in the user's browser. This is usually done using conditional checks, such as checking for the existence of certain objects, methods, or properties.

Implementation: If the feature is not supported, the polyfill provides its own implementation of that feature using JavaScript code. This implementation replicates the behavior of the missing feature as closely as possible.

Usage: Developers include the polyfill in their web pages or applications, usually by including it as a separate JavaScript file or by using a package manager like npm or Yarn. The polyfill runs when the page loads and ensures that the required functionality is available, even in older browsers.
 */


// Polyfill for Object.entries
if (!Object.entries) {
    Object.entries = function(obj) {
        var result = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                result.push([key, obj[key]]);
            }
        }
        return result;
    };
}

// Example usage
var obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj));  // Output: [["a", 1], ["b", 2], ["c", 3]]


/*******************************************************************/
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}

// Usage of the polyfilled String.prototype.startsWith()
const str = "Hello, world!";
console.log(str.startsWith("Hello")); // Output: true
console.log(str.startsWith("world", 7)); // Output: true
console.log(str.startsWith("foo")); // Output: false


/**
 * 
The polyfill checks if String.prototype.startsWith exists. If it doesn't, it defines the method by extending String.prototype.
The polyfilled startsWith method mimics the behavior of the native method by using indexOf() to check if the string starts with the specified substring.
We then use the polyfilled startsWith method to check if a string starts with certain substrings.
 */