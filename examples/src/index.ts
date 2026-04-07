const persons = {
  age: 30,
  hobbies: [],
  name: 'John Smith',
};

const {
  age, hobbies,
} = persons;

class Testing {

  constructor() {}

  doSomething() {
    const {
      age, hobbies,
    } = persons;
  }
}
