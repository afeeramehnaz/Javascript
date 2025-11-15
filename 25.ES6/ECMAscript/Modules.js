/*
Modules:

Before ES6, JavaScript didn't have a built-in module system. Developers often used workarounds like the Module Pattern or libraries like RequireJS. ES6 introduced a native module system for JavaScript, allowing developers to define modules and import/export functionality between them.

Modules in ES6 offer a clean way to organize code, encapsulate functionality, and reduce global scope pollution. The export keyword is used to expose functionality from a module, and the import keyword is used to bring in functionality from other modules.

*/

// module1.js
export const foo = 'hello';
export function bar() {
    return 'world';
}

// module2.js
import { foo, bar } from './module1.js.js';
console.log(foo); // Output: hello
console.log(bar()); // Output: world

/************************* */
//Named Exports and Imports:

//Named exports allow you to export multiple values from a module by name. When importing, you can specify which values to import.

// module1.js
export const fooo = 'hello';
export function bar() {
    return 'world';
}

// module2.js
import { fooo, bar } from './module1.js.js';

/**************************** */

//Default Exports and Imports:

//Default exports allow you to export a single value or function from a module. When importing, you can import this default export using any name.

// module1.js
const baz = 'default export';
export default baz;

// module2.js
import baz from './module1.js.js';


/***************************************** */

//Exporting All from a Module:

//You can export all named exports from a module as a single object using the * as syntax.
// module1.js
export const ffoo = 'hello';
export function bar() {
    return 'world';
}

// module2.js
import * as module1 from './module1.js.js';
console.log(module1.ffoo); // Output: hello
console.log(module1.bar()); // Output: world
