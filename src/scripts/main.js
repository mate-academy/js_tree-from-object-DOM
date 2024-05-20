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

function createTree(element, data) {
  const ul = document.createElement('ul');

  element.appendChild(ul);

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    ul.appendChild(li);

    if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
      const hasProperties = Object.keys(data[key]).length > 0;

      if (hasProperties) {
        createTree(li, data[key]);
      }
    }
  }
}

const tree = document.createElement('div');

tree.id = 'tree';

document.body.appendChild(tree);

createTree(tree, food);
