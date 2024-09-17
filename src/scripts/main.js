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

  element.appendChild(ul);

  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement('li');

    li.textContent = key;

    if (typeof value === 'object' && Object.keys(value).length > 0) {
      const nextList = createTree(document.createElement('ul'), value);

      li.appendChild(nextList);
    }
    ul.appendChild(li);
  }

  return ul;
}

createTree(tree, food);
