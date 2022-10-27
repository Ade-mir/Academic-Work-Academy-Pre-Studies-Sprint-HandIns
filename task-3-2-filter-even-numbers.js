// Create a function that takes an array of numbers. The function should return an array that only contains the even numbers in the input array. To do this, you will need to use the array.filter function, or a for loop to iterate through the array and check each number in the array with the modulus operator.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using the array filter function.

function even(array) {
  const filtered = array.filter(function (n) {
    return n % 2 === 0;
  });
  console.log(filtered);
}

even(numbers);

// Using the for loop.

function even2(array) {
  let filtered = [];
  for (let n = 0; n <= array.length; n++) {
    if (n % 2 === 0) filtered += n;
  }
}

even2(numbers);
