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
  const isValidElement = element instanceof Element;
  const isValidArray = data && typeof data === 'object' && !Array.isArray(data);

  if (!isValidElement || !isValidArray) {
    return;
  }

  if (Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key of Object.keys(data)) {
    const li = document.createElement('li');

    if (Object.keys(data[key]).length === 0) {
      li.textContent = key;
    } else {
      li.textContent = key;
      createTree(li, data[key]);
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

createTree(tree, food);
