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
    const subUL = createTree(ul, value);

    li.textContent = key;

    if (subUL.textContent) {
      li.appendChild(subUL);
    }

    ul.append(li);
  }

  tree.append(ul);

  return ul;
}

createTree(tree, food);
