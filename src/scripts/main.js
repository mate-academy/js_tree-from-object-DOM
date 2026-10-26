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
  // WRITE YOUR CODE HERE

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    element.append(li);

    if (Object.keys(data[key]).length === 0) {
      continue;
    };

    const ul = document.createElement('ul');

    createTree(ul, data[key]);
    li.append(ul);
  };
};

createTree(tree, food);
