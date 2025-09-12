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

export function createTree(element, data) {
  if (!element || !data) return;

  const keys = Object.keys(data);
  if (keys.length === 0) return; // Avoid empty ULs

  const ul = document.createElement('ul');

  keys.forEach(key => {
    const li = document.createElement('li');
    li.textContent = key;

    const child = data[key];
    if (typeof child === 'object' && child !== null && Object.keys(child).length > 0) {
      createTree(li, child); // Only recurse if child has keys
    }

    ul.appendChild(li);
  });

  element.appendChild(ul);
}

createTree(tree, food);
