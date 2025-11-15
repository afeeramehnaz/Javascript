let d=true
let e=true

console.log(d==e)//true
console.log(d===e)//true
/**************************** */
let num = 5;
let strNum = '5';

console.log(num == strNum); // true (values are equal)
console.log(num === strNum); // false (values are not strictly equal because of different types)


/**************************** */
// Arithmetic Operators
let a = 10;
let b = 5;
let addition = a + b; // 15
let subtraction = a - b; // 5
let multiplication = a * b; // 50
let division = a / b; // 2
let modulo = a % b; // 0
let increment = a++; // a = 11 (post-increment)
let decrement = b--; // b = 4 (post-decrement)

// Assignment Operators
let c = 7;
c += 3; // Equivalent to c = c + 3 (c = 10)

// Comparison Operators
let isEqual = a == b; // false
let isStrictEqual = a === b; // false
let isNotEqual = a != b; // true
let isGreaterThan = a > b; // true
let isLessThan = a < b; // false
let isGreaterOrEqual = a >= b; // true
let isLessOrEqual = a <= b; // false

// Logical Operators
let x = true;
let y = false;
let logicalAnd = x && y; // false
let logicalOr = x || y; // true
let logicalNot = !x; // false

// Bitwise Operators
let bitwiseAnd = a & b; // 0
let bitwiseOr = a | b; // 15
let bitwiseXOR = a ^ b; // 15
let bitwiseNOT = ~a; // -11
let leftShift = a << 1; // 20
let rightShift = a >> 1; // 2

// Ternary Operator
let result = (a > b) ? "a is greater" : "b is greater";

// Unary Operators
let unaryPlus = +a; // 10
let unaryMinus = -b; // -5
let typeCheck = typeof a; // "number"
let logicalNegation = !x; // false

// String Operator
let str1 = "Hello";
let str2 = " World";
let greeting = str1 + str2; // "Hello World"

// Comma Operator
let value = (a++, a); // value = 11 (returns the rightmost value)

// Type Operators
let isArray = [1, 2, 3] instanceof Array; // true
let isProperty = 'property' in { property: 'value' }; // true

// Exponentiation Operator (ES6)
let exponent = 2 ** 3; // 8

console.log("Arithmetic:", addition, subtraction, multiplication, division, modulo);
console.log("Assignment:", c);
console.log("Comparison:", isEqual, isStrictEqual, isNotEqual, isGreaterThan, isLessThan, isGreaterOrEqual, isLessOrEqual);
console.log("Logical:", logicalAnd, logicalOr, logicalNot);
console.log("Bitwise:", bitwiseAnd, bitwiseOr, bitwiseXOR, bitwiseNOT, leftShift, rightShift);
console.log("Ternary:", result);
console.log("Unary:", unaryPlus, unaryMinus, typeCheck, logicalNegation);
console.log("String:", greeting);
console.log("Comma:", value);
console.log("Type:", isArray, isProperty);
console.log("Exponentiation:", exponent);
