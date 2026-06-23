const persons = {
  age: 30,
  hobbies: [],
  name: 'John Smith',
};

const secrets = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
];

const {
  age, hobbies,
} = persons;

function Deco() {
  return () => {};
}

function Module() {
  return () => {};
}

async function requiresAwait() {
  return Promise.resolve(null);
}

class Testing {
  @Deco()
    name: string;

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
  constructor() {

  }

  doSomething() {
    const {
      age, hobbies,
    } = persons;
  }
}

async function main() {
  requiresAwait();
}

main();
