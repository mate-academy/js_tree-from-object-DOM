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
  const createUl = document.createElement('ul');

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const createLi = document.createElement('li');

      createLi.textContent = key;

      if (typeof data[key] === 'object') {
        const nestedUl = createTree(null, data[key]);

        createLi.appendChild(nestedUl);
      }

      createUl.appendChild(createLi);
    }
  }

  if (element) {
    element.appendChild(createUl);
  }

  return createUl;
}

createTree(tree, food);
