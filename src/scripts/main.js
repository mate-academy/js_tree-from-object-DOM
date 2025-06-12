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
  const keys = Object.keys(data);

  if (keys.length === 0) {
    return null;
  }

  const ul = document.createElement('ul');

  for (const key of keys) {
    const li = document.createElement('li');
    li.textContent = key;

    const childUl = createTree(li, data[key]);

    if (childUl) {
      li.appendChild(childUl);
    }

    ul.appendChild(li);
  }

  return ul;
}

tree.appendChild(createTree(tree, food));

