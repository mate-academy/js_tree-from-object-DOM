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
  if (!data || typeof data !== 'object') {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    // eslint-disable-next-line
    if (data[key] && typeof data[key] === 'object'
      // eslint-disable-next-line
      && Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }

    ul.appendChild(li);
  }

  if (ul.children.length > 0) {
    element.appendChild(ul);
  }
}

createTree(tree, food);
