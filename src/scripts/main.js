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

const body = document.querySelector('body');

function createTree(element, data) {
  if (Object.keys(data).length === 0) {
    return;
  }

  const tree = document.createElement('ul');

  element.append(tree);

  Object.entries(data).forEach(([key, value]) => {
    const li = document.createElement('li');

    tree.appendChild(li);
    li.textContent = key;

    createTree(li, value);
  });
}

createTree(body, food);
