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

    const ul = document.createElement('ul');

    for (const key in obj) {
      const li = document.createElement('li');
      li.textContent = key;

      const childrenUl = buildList(obj[key]);
      if (childrenUl) {
        li.appendChild(childrenUl);
      }

      ul.appendChild(li);
    }

    return ul;
  }

  const ul = buildList(data);

  if (ul) {
    element.appendChild(ul);
  }
}

createTree(tree, food);
