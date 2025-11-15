
/* In JavaScript, weak references provide a way to hold references to objects without preventing them from being garbage collected when they're no longer needed. 
Weak references are particularly useful for implementing cache-like structures or managing relationships between objects without causing memory leaks.
 */

/**
 * Characteristics of Weak References:
Garbage Collection: Objects referenced only by weak references are candidates for garbage collection when there are no strong references left.

No Enumeration: Weak collections (WeakMap and WeakSet) do not expose methods for enumerating their contents, meaning you cannot iterate over the keys or values.

Limited Usage: Weak references are suitable for cases where you need to associate additional data with objects but do not want to prevent those objects from being garbage collected. They're not suitable for scenarios where you need to maintain references over a longer period.

Use Cases:
Caching: WeakMap can be used to cache data associated with objects, allowing cached data to be automatically cleared when the object is garbage collected.

Memory Management: WeakSet can be used to keep track of objects for memory management purposes, such as tracking temporary objects or managing object relationships.
 */