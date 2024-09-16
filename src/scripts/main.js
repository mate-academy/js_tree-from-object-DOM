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
    const createLi = document.createElement('li');

    createLi.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      const childUl = createTree(null, data[key]);

      createLi.appendChild(childUl);
    }

    createUl.appendChild(createLi);
  }

  if (element) {
    element.appendChild(createUl);
  }

  return createUl;
}

createTree(tree, food);
