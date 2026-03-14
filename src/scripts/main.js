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

tree.innerHTML = '';

function createTree(element, value) {
  if (!value || typeof value !== 'object') {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in value) {
    const childValue = value[key];
    const li = document.createElement('li');

    li.textContent = key;

    if (
      childValue &&
      typeof childValue === 'object' &&
      Object.keys(childValue).length
    ) {
      createTree(li, childValue);
    }
    ul.appendChild(li);
  }
  element.appendChild(ul);
}

createTree(tree, food);
