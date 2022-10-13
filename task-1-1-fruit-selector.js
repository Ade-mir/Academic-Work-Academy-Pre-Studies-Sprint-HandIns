// Fruit selector

// Create a function that receives a number.
// If the number is smaller than 10, the function should return “banana”.
// If the number is between 10 and 19, the function should return “apple”.
// if the number is 20 or higher, it should return “orange”. The function signature could look as follows

// function fruitSelector(fruitCode) {}

const fruitCode = 20;

console.log(fruitSelector(fruitCode));

function fruitSelector(fruitCode) {
  if (fruitCode < 10) return 'banana';
  if (fruitCode < 20) return 'apple';
  return 'orange';
}
