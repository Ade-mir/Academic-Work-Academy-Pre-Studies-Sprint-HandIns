// Create a function that takes 2 person objects (like the ones we created in task 2.2). The function should compare the age of the two persons, and return the name of the oldest person. So if I have these two persons:
// The function should return “Eirik”.
// If both persons are equally old. The function should return “equally old” instead of a name.

let person1 = {
  name: 'Magnus',
  age: 35,
  profession: 'coder',
};

let person2 = {
  name: 'Eirik',
  age: 34,
  profession: 'coder',
};

// My favorite solution. Function with if statement and conditional operator.
function nameOfOldestPerson(person1, person2) {
  if (person1.age === person2.age) return 'equally old';
  return person1.age > person2.age ? person1.name : person2.name;
}

// Cool, but maybe a messy solution? Function with a stacked conditional operator.
function nameOfOldestPerson1(person1, person2) {
  return person1.age === person2.age
    ? 'equally old'
    : person1.age > person2.age
    ? person1.name
    : person2.name;
}

// Simple logic, but bulky code? Function with if statements only.
function nameOfOldestPerson2(person1, person2) {
  if (person1.age === person2.age) return 'equally old';
  if (person1.age > person2.age) return person1.name;
  else return person2.name;
}

console.log(nameOfOldestPerson(person1, person2));
console.log(nameOfOldestPerson1(person1, person2));
console.log(nameOfOldestPerson2(person1, person2));
