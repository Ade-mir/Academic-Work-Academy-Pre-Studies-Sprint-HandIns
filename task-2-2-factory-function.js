// Create a factory function that are able to return the following javascript object:

let person = {
  name: 'Magnus',
  age: 33,
  profession: 'coder',
};

// Factory Function

function createPerson(name, age, profession) {
  return {
    name: name,
    age: age,
    profession: profession,
  };
}

let person1 = createPerson('Magnus', 33, 'coder');
console.log(person1);

let person2 = createPerson('Maria', 24, 'student');
console.log(person2);
