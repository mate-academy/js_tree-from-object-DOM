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

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('#tree');

  if (tree) {
    createTree(tree, food);
  }
});

function createTree(element, data) {
  if (
    typeof data !== 'object' ||
    data === null ||
    Object.keys(data).length === 0
  ) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const li = document.createElement('li');

      li.textContent = key;

      createTree(li, data[key]);

      ul.appendChild(li);
    }
  }

  element.appendChild(ul);
}
