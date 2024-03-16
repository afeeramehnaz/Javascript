// Conditional Statements - if, else if, else
let num = 10;

if (num > 10) {
  console.log("Number is greater than 10");
} else if (num < 10) {
  console.log("Number is less than 10");
} else {
  console.log("Number is 10");
}

// Switch Statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's the start of the week");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Some other day");
}

//for loop

let numarr=[1,2,3,4,5];

numarr.forEach((item)=>{
    console.log(item);
})

// for...of 
for (let item of numarr){
    console.log(item)
  }
  
  // for...in
  for (let i in numarr){
    console.log(num[i])
  }