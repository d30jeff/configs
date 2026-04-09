const persons = {
  age: 30,
  hobbies: [],
  name: 'John Smith',
};

const {
  age, hobbies,
} = persons;

class Testing {
  items = ['Awesome',
    'Street',
    'Awesome',
    'Street',
    'Awesome',
    'Street',
    'Awesome',
    'Street',
    'Awesome',
    'Street',
    'Awesome',
    'Street',
    'Awesome',
    'Street',
    'Awesome',
    'Street',
    'Awesome',
    'Street',
    'Awesome',
    'Street',
    'Awesome',
    'Street'];
  constructor() {}

  doSomething() {
    const {
      age, hobbies,
    } = persons;
  }
}
