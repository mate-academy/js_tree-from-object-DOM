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
  if (!(element instanceof Element)) {
    return;
  }

  if (!data || typeof data !== 'object') {
    return;
  }

  const keys = Object.keys(data);

  if (keys.length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  element.appendChild(ul);

  keys.forEach((key) => {
    const li = document.createElement('li');

    li.textContent = key;
    ul.appendChild(li);

    const child = data[key];

    if (child && typeof child === 'object') {
      createTree(li, child);
    }
  });
}

createTree(tree, food);
