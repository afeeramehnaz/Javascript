
// While Loop
let count = 0;
while (count < 5) {
  console.log("Count is: ", count);
  count++;
}

// Do-While Loop
let i = 0;
do {
  console.log("i is: ", i);
  i++;
} while (i < 5);

// For Loop
for (let i = 0; i < 5; i++) {
  console.log("For loop iteration: ", i);
}

// For-In Loop (for objects/properties)
let person = {
  name: "Alice",
  age: 30,
  gender: "female"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// For-Of Loop (for arrays/iterables)
let fruits = ["Apple", "Orange", "Banana"];
for (let fruit of fruits) {
  console.log(fruit);
}

// Break and Continue
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log("Encountered 3. Breaking loop.");
    break; // Exit the loop
  }
  if (i === 6) {
    console.log("Encountered 6. Skipping iteration.");
    continue; // Skip this iteration
  }
  console.log("Iteration: ", i);
}
