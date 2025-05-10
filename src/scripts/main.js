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

function createTreeElement(data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      const subUl = createTreeElement(data[key]);

      li.appendChild(subUl);
    }

    ul.appendChild(li);
  }

  return ul;
}

function createTree(element, data) {
  const treeElement = createTreeElement(data);

  element.appendChild(treeElement);
}

createTree(tree, food);
