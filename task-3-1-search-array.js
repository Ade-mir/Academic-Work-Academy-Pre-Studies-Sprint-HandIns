// Create a function “searchArray”. The function should receive a search word and an array. For example an array of fruits:

const fruits = ['Apple', 'Banana', 'Grape', 'Orange', 'Pear', 'Watermelon'];

// The function should check if the array includes the search word. And if so, return the index (the position) of the fruit in the array. If the search word is not in the array, the function should return -1.

function searchArray(searchWord, array) {
  console.log(array.indexOf(searchWord));
}

searchArray('Banana', fruits);
