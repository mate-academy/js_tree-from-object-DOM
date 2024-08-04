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

  element.append(ul);

  for (const item in data) {
    if (data.hasOwnProperty(item)) {
      const li = document.createElement('li');

      li.textContent = item;
      ul.appendChild(li);

      if (Object.keys(data[item]).length) {
        createTree(li, data[item]);
      }
    }
  }
}

createTree(tree, food);
