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
 * Build html dom tree based on js object
 * @param element
 * @param data
 */
function createTree(element, data) {
  // prevent issue with empty ul
  if (!Object.keys(data).length) {
    return;
  }

  // wrapper element
  const ul = document.createElement('ul');

  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement('li');

    li.textContent = key;

    // build tree recursively if there are child
    if (
      typeof value === 'object' &&
      value !== null &&
      Object.keys(value).length
    ) {
      createTree(li, value);
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

createTree(tree, food);
