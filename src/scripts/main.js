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
  function buildList(obj) {
    if (!obj || Object.keys(obj).length === 0) {
      return null;
    }

    const list = document.createElement('ul');

    for (const key in obj) {
      const li = document.createElement('li');
      li.textContent = key;

      const children = buildList(obj[key]);
      if (children) {
        li.appendChild(children);
      }

      list.appendChild(li);
    }

    return list;
  }

  const builtTree = buildList(data);

  if (builtTree) {
    element.appendChild(builtTree);
  }
}

createTree(tree, food);
