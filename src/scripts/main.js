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

const tree = document.createElement('ul');

tree.id = 'tree';
document.body.appendChild(tree);

function createTree(element, data) {
  // WRITE YOUR CODE HER

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    element.appendChild(li);

    if (Object.keys(data[key]).length > 0) {
      const ul = document.createElement('ul');

      li.appendChild(ul);
      createTree(ul, data[key]);
    }
  }
}

createTree(tree, food);
