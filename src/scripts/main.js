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

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  if (!isNonEmptyObject(data)) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key of Object.keys(data)) {
    const li = document.createElement('li');

    li.textContent = key;

    const value = data[key];

    if (isNonEmptyObject(value)) {
      const childUl = document.createElement('ul');

      li.appendChild(childUl);
      createTree(childUl, value);
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

createTree(tree, food);
