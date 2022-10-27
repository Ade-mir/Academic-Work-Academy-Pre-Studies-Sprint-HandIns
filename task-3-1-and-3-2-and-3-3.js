// Task 3.1 Search array

const fruits = ['Apple', 'Banana', 'Grape', 'Orange', 'Pear', 'Watermelon'];

function searchArray(searchWord, array) {
  console.log(array.indexOf(searchWord));
}

searchArray('Grape', fruits);

// Task 3.2 Filter even numbers using array filter function.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function even(array) {
  const filtered = array.filter(function (n) {
    return n % 2 === 0;
  });
  console.log(filtered);
}

even(numbers);

// Task 3.2 Filter even numbers using for loop.

function even2(array) {
  let filtered = [];
  for (let n = 0; n <= array.length; n++) {
    if (n % 2 === 0) filtered += n;
  }
}

even2(numbers);

// Task 3.3 Random color generator using an array.

randomColor();

function randomColor() {
  const colors = ['green', 'yellow', 'red', 'blue', 'purple', 'pink'];
  console.log(colors[Math.floor(Math.random() * 6)]);
}
