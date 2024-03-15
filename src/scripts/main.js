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
  const ul = document.createElement('ul');

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const li = document.createElement('li');

      li.textContent = key;

      if (typeof data[key] === 'object' && data[key] !== null) {
        // eslint-disable-next-line max-len
        const nestedUl = li.appendChild(createTree(document.createElement('ul'), data[key]));

        li.appendChild(nestedUl);
      }

      ul.appendChild(li);
    }
  }

  element.appendChild(ul);

  return element;
}

createTree(tree, food);
