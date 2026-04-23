'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const some = document.createElement('ul');

  for (const key in data) {
    const someTwo = document.createElement('li');

    some.append(someTwo);
    someTwo.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(someTwo, data[key]);
    }
  }

  element.append(some);
}

createTree(tree, food);
