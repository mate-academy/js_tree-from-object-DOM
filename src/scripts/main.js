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

  document.body.insertAdjacentElement('afterbegin', tree);
}

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  const ul = document.createElement('ul');

  for (const key of Object.keys(data)) {
    const li = document.createElement('li');

    li.textContent = key;
    ul.insertAdjacentElement('beforeend', li);

    if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }
  }

  element.insertAdjacentElement('beforeend', ul);
}

createTree(tree, food);
