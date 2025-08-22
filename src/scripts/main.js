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

  function createTreeNode(obj) {
    const keys = Object.keys(obj);

    if (keys.length === 0) {
      return null;
    }

    const ul = document.createElement('ul');

    for (const key of keys) {
      const li = document.createElement('li');

      li.textContent = key;

      const value = obj[key];

      if (value !== null && typeof value === 'object') {
        const nestedUl = createTreeNode(value);

        if (nestedUl) {
          li.appendChild(nestedUl);
        }
      }

      ul.appendChild(li);
    }

    return ul;
  }

  const rootTree = createTreeNode(data);

  if (rootTree) {
    element.appendChild(rootTree);
  }
}

createTree(tree, food);
