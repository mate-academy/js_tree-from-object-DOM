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

  if (Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key of Object.keys(data)) {
    const li = document.createElement('li');

    li.textContent = key;

    ul.append(li);

    const child = data[key];

    if (child && typeof child === 'object' && Object.keys(child).length > 0) {
      createTree(li, child);
    }
  }

  element.append(ul);
}

createTree(tree, food);
