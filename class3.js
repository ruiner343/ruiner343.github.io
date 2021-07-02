var a = 5
var b = 3
console.log(a+b)
function add (num1, num2){
	return num1 + num2;
}
console.log(add(1,3))
function subtract (num1, num2){
	return num1 - num2
}
console.log(subtract(3,1))
function triple (num1){
	return num1 * 3
}
console.log(triple(4))
function add10 (num1){
	return num1 + 10
}
console.log(add10(0))
function double (num1){
	return num1 * 2
}
console.log(double(5))
function checkLessEqualTo12(num1){
    if(num1 <= 12) { // checks if num1 < 12 
      return num1 + 2
  } else {
      return num1 + 10
  }
}
console.log(checkLessEqualTo12(12))
function between10And20(num1){
    if(num1 < 10) { // checks if num1 < 12 
      return num1 + 1
  } else if (num1 < 20) {
      return num1 + 2
  } else {
      return num1 + 3
  }
}
console.log(between10And20(17))
function alwaysTrue(num1) {
     if(true){ 
       return 90
   } else if (num1 < 5) {
       return num1 + 5;
   } else {
       return num1 + 8
   }
}
console.log(alwaysTrue(3))

// if score is > 90, to return "A"
// if score is between 80 and 90, to return "B"
// if score is between 70 and 80, to return "C"
// if score is between 60 and 70, to return "D"
// if score is less than 60, to return "F"
// left number is always exclusive, except 60 and 90
// HINT: you can use a lot of If and else if statements
function reportCard(score){
	if(score >=91){
  	return "A"
  } else if (score <=90 && score >= 80){
  	return "B"
  } else if (score <=79 && score >= 70){
  	return "C"
  } else if (score <=69 && score >= 60){
  	return "D"
  } else {
  	return "F"
  }
}
console.log(reportCard(78))
// Step function method/staircase method 
function reportCardBetter(score) {
    if(score > 90) {
      return "A";
  } else if (score > 80) {
      return "B";
  } else if (score > 70) {
      return "C";
  } else if (score >= 60) {
      return "D";
  } else {
      return "F";
  }

}
console.log(78)
// Top-down execution, the code is read from top to bottom
// use https://jsfiddle.net/ for code