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

/**
 *
 * @param {HTMLElement} element
 * @param {Object} data
 */
function createTree(element, data) {
  const createUl = document.createElement('ul');

  Object.keys(data).forEach((key) => {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(data[key]).length !== 0) {
      createTree(li, data[key]);
    }

    createUl.appendChild(li);
  });

  element.appendChild(createUl);
}

createTree(tree, food);
