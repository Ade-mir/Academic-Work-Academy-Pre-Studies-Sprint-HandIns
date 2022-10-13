// What does “Math.random()” do alone?
// 'Math.random()' gives you a random number that is greator to or equal to 0 and less than 1 WITH decimals.

// console.log(Math.random());

// What does the “Math.floor()” part contribute with?
// 'Math.floor()' rounds down the number to the largest integer that is less than or equal to the given number.

// console.log(Math.floor(Math.random()));

// How is it that the last number decides the interval of the random number?
// Because 'Math.random()' gives you interval (0 - 0.9999...), and 'Math.floor()' rounds down any number to the largest integer (no decimals), any number in the interval (0 - 0.9999...) would become 0. Therefor, we need to multiple our initial 'Math.random()' number to increase the inital number to get anythin above 0. Multiple by 6, and we get a number between 0 and 5.99999.... Hence the number we give will always return the range up to it, but not include it.

// console.log(Math.floor(Math.random() * 6));

// console.log(randomColor());

// function randomColor() {
//   let random = Math.floor(Math.random() * 6);
//   if (random === 0) return 'green';
//   else if (random === 1) return 'yellow';
//   else if (random === 2) return 'red';
//   else if (random === 3) return 'blue';
//   else if (random === 4) return 'purple';
//   return 'pink';
// }

// flipCoin function.

flipCoin();

function flipCoin() {
  let random = Math.floor(Math.random() * 2);
  if (random === 0) console.log('Heads');
  else console.log('Tails');
}

throwDice(3);

function throwDice(numberOfDice) {
  for (let i = 1; i <= numberOfDice; i++)
    console.log(Math.floor(Math.random() * 7));
  if (numberOfDice === 0) console.log('Please throw at least 1 dice.');
}
