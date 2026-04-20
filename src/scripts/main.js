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
 * Recursively creates a nested list (ul/li) from a nested object
 * @param {HTMLElement} element - DOM element to append the tree to
 * @param {Object} data - nested object to transform into a tree
 */
function createTree(element, data) {
  if (!data || typeof data !== 'object') return;

  const ul = document.createElement('ul');

  Object.keys(data).forEach(key => {
    const li = document.createElement('li');
    li.textContent = key;

    // Recursively create nested list for any object, even if empty
    if (data[key] && typeof data[key] === 'object') {
      createTree(li, data[key]);
    }

    ul.appendChild(li);
  });

  element.appendChild(ul);
}

createTree(tree, food);
