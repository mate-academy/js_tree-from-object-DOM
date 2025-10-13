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

function isNonEmptyObject(v) {
  return v && typeof v === 'object' && Object.keys(v).length > 0;
}

function createTree(data) {
  // WRITE YOUR CODE HERE
  if (!isNonEmptyObject(data)) {
    return null;
  }

  const ul = document.createElement('ul');

  for (const key of Object.keys(data)) {
    const li = document.createElement('li');

    li.textContent = key;

    const value = data[key];

    if (isNonEmptyObject(value)) {
      const childUl = createTree(value);

      if (childUl) {
        li.appendChild(childUl);
      }
    }

    ul.appendChild(li);
  }

  return ul;
}

const treeElement = createTree(food);

if (treeElement) {
  tree.appendChild(treeElement);
}
