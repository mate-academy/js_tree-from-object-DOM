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

const rootUl = document.createElement('ul');

document.body.appendChild(rootUl);

function createTree(element, data) {
  if (Object.keys(data).length === 0) {
    return null;
  } else {
    for (const key in data) {
      const li = document.createElement('li');

      li.textContent = key;
      element.appendChild(li);

      if (
        typeof data[key] === 'object' &&
        data[key] !== null &&
        Object.keys(data[key]).length > 0
      ) {
        const ul = document.createElement('ul');

        li.appendChild(ul);
        createTree(ul, data[key]);
      }
    }
  }
}

createTree(rootUl, food);
