//1. Make an array called "myArray" that includes five numbers between 1 and 50.
let myArray = [27, 34, 3, 4, 5];
//2. On a seperate line outside of your array, add a number to the second number in your array so that it is equal to 55. Hint: remember that each element in your array has a number based on its position in the array. Remember which operator would be used to define something as its origional value plus or minus a new one! 
myArray[1] += 21;
//3. Print the second number of your array in the console! If it is not equal to 55, check you work and correct it. 
console.log(myArray[1]);
//4. Click the buttion! You should see something change.
//5. Subtract from the second number so that it is no longer equal to 55, but 25. Log it in the console. 
myArray[1] -= 30;
console.log(myArray[1]);
//6. Click the button again to see what happens!














// Do not worry about understanding the code below
let wellDone = document.getElementById("wellDone");

function randomColor() {
  wellDone.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
}

function calculate() {
  if (myArray[1] == 55) { 
 wellDone.style.color = "white";
} else if (myArray[1] == 25) {
  setInterval(randomColor, 700); 
 }
}