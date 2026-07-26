'use strict';

function createTree(element, data) {
  if (
    !(typeof Element !== 'undefined' || element instanceof Element) ||
    typeof data !== 'object' ||
    data === null ||
    Array.isArray(data)
  ) {
    return;
  }

  const keys = Object.keys(data);

  const ul = document.createElement('ul');

  for (const key of keys) {
    const li = document.createElement('li');

    li.textContent = key;

    createTree(li, data[key]);

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = createTree;
}

if (typeof window !== 'undefined') {
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

  if (tree) {
    createTree(tree, food);
  }
}
