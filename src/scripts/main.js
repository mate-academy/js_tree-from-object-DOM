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

if (!tree) {
  tree = document.createElement('div');
  tree.id = 'tree';
  document.body.appendChild(tree);
}

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  const ul = document.createElement('ul');

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const li = document.createElement('li');

      li.innerHTML = key;

      if (Object.keys(data[key]).length > 0) {
        createTree(li, data[key]);
      }
      ul.appendChild(li);
    }
  }
  element.appendChild(ul);
}

createTree(tree, food);
