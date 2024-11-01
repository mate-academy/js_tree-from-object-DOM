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
  const ul = document.createElement('ul');

  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(value).length > 0) {
      createTree(li, value);
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);

  return element;
}

createTree(tree, food);
