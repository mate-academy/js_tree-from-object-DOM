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

let tree = document.querySelector('#tree');

if (tree === null) {
  tree = document.createElement('div');
  tree.setAttribute('id', 'tree');

  const body = document.querySelector('body');

  body.appendChild(tree);
}

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }
    ul.appendChild(li);
  }
  element.appendChild(ul);
}

createTree(tree, food);
