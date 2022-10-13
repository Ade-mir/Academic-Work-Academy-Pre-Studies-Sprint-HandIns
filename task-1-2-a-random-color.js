// Exercise A

//The following javascript will give you a random number between 0 and 3.

// let random = Math.floor(Math.random() * 4);

// Use this code inside a function that returns a random color. If “random” is 0, return “green”. If it is 1 return “yellow”. If 2, return “red” and if 3 retur “blue”.

// console.log(randomColor());

// function randomColor() {
//   let random = Math.floor(Math.random() * 4);
//   if (random === 0) return 'green';
//   else if (random === 1) return 'yellow';
//   else if (random === 2) return 'red';
//   return 'blue';
// }

// Exercise B

// Now it’s time to extend the function so that it can return more colors.
// Add on “purple” and “pink”. To do this, you need to alter the code that generates a random number. If you change “4” in the back of that line to “6”, you should get a random number between 0 and 5 instead.

console.log(randomColor());

function randomColor() {
  let random = Math.floor(Math.random() * 6);
  if (random === 0) return 'green';
  else if (random === 1) return 'yellow';
  else if (random === 2) return 'red';
  else if (random === 3) return 'blue';
  else if (random === 4) return 'purple';
  return 'pink';
}
