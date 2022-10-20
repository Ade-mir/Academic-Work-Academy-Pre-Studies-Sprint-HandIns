//Create a function that writes out (console.log) N numbers of the fibonacci sequence. The next number in the fibonacci sequence is the sum of the two numbers prior.

function fibonacciSequence(limit) {
  let firstSeed = 0;
  let secondSeed = 1;
  let sequence = '0, 1';

  for (let i = 2; i < limit; i++) {
    let inbetweenSeed = firstSeed + secondSeed;
    sequence += ', ' + inbetweenSeed;
    firstSeed = secondSeed;
    secondSeed = inbetweenSeed;
  }

  if (limit === 1) console.log(firstSeed);
  else if (limit <= 0)
    console.log(
      'Please enter the ammount of numbers of the fibonacci sequence you wish returned.'
    );
  else console.log(sequence);
}

fibonacciSequence(15);
