'use strict';

const tree = document.querySelector('#tree');

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

function createTree(element, data) {
  const newUl = document.createElement('ul');

  for (const key in data) {
    const newLi = document.createElement('li');

    newLi.textContent = key;

    if (typeof data[key] === 'object') {
      const nestedUl = createTree(newLi, data[key]);

      newLi.appendChild(nestedUl);
    }

    newUl.appendChild(newLi);
  }

  if (element) {
    element.appendChild(newUl);
  }

  return newUl;
}

createTree(tree, food);
