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
 * @returns
 */
function createTree(element, data) {
  if (Object.keys(data).length === 0) {
    return;
  }

  const elementUl = document.createElement('ul');

  for (const key of Object.keys(data)) {
    const elementLi = document.createElement('li');

    elementLi.textContent = key;
    elementUl.append(elementLi);
    createTree(elementLi, data[key]);
  }

  element.append(elementUl);
}

createTree(tree, food);
