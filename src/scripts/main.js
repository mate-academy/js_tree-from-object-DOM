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
  const ul = document.createElement('ul');

  if (element) {
    element.append(ul);
  } else {
    ul.id = 'tree';
    document.body.append(ul);
  }

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    ul.append(li);

    if (Object.keys(data[key]).length) {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
