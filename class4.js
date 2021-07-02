// Array: list of items in JS 

var listOfNumbers = [1,4,5,7,0];

// Add to the list 
listOfNumbers.push(10);
console.log(listOfNumbers);

// Update an element in the list 
// JS uses 0-based indexing, when counting up, we start from 0 not 1
listOfNumbers[0] = 99;
console.log(listOfNumbers)
listOfNumbers[2] = 100;
// Delete from the list
// Iterating through the list
// Go through each element in the list 
let listOfWords = ["hello", "my", "name", "is", "Elton"] // list of string 

// for-loop
let i;
for(i = 0; i < listOfWords.length; i++) {
	console.log(listOfWords[i])
}
// Calculator
let testCase1 = "3x5" // Data type? : string (text)
let testCase2 = "5+9"
let testCase3 = "7-3" 
// x is mulitplication, / is division, + is addition, - is substraction
function calculator(stringInput){ 
    // Step 1: iterate through the string, make the string into a list 
  let listOfCalculatorItems = stringInput.split("")
  console.log(listOfCalculatorItems)

    // Step 2: figure out what is the operator being inputted 
    let operator = listOfCalculatorItems[1];
  console.log(operator)

  // Step 3: to "parse" the numbers into actual numbers 
  let firstNumber = parseInt(listOfCalculatorItems[0]);
  let secondNumber = parseInt(listOfCalculatorItems[2])

  // Step4: bunch of if stateements depending on what the operator is:
  let result; 
  if (operator == "x") {
      result = firstNumber * secondNumber;
  } else if (operator == "/") {
      result = firstNumber / secondNumber; 
  } else if (operator == "+") {
    result = firstNumber + secondNumber;
  } else if (operator == "-") { 
      result = firstNumber - secondNumber;
  }

    return result;
}

// Test cases 
console.log(calculator(testCase1) == 15) // == checks if the value are the same
console.log(calculator(testCase2) == 14) 
console.log(calculator(testCase3) == 4)
