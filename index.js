// prompt the user to enter a list of flavors
// use prompt to capture user input
let userInput = prompt (`Please enter a list of froyo flavors seperated by a comma` , `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);

// split the user input into an array of flavors
// use split method to separate the string by commas
let flavorList = userInput.split (`,`);

// create an empty object to store the count of each flavor
let flavorCount = {};

// loop through the array of flavors
for(let i = 0; i < flavorList.length; i ++) {
  let flavor = flavorList[i]
  // check if the flavor already exists in the object
  if (flavorCount[flavor]){
    // if it exists increase the count by 1
    flavorCount[flavor] ++;
  }
  // if it doesnt exist add it to the object with a count of 1
  else {
    flavorCount[flavor] = 1
  }
}
// log the result to the browser console
console.log (flavorCount);

// test with "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
// result: { vanilla: 3, strawberry: 1, coffee: 2 }