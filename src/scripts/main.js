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

function createTree(element, data) {
  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement('li');

    if (Object.keys(value).length > 1) {
      const ul = document.createElement('ul');

      li.textContent = key;

      li.appendChild(createTree(ul, value));
    } else {
      li.textContent = key;
    }

    element.appendChild(li);
  }

  return element;
}

document.body.appendChild(createTree(tree, food));
